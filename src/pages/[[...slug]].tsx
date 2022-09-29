import sdk from 'graphql/graphQLClient';
import Layout from 'layouts/Layout';
import LayoutSection from 'layouts/LayoutSection';

import { FooterProps } from 'components/Footer/Footer';
import { HeaderProps } from 'components/HeaderProduct/Header';

import { useWindowSize } from 'utils/hooks';

import type { IComponentFooter, IComponentHeader, ITemplatePage } from 'graphql/types';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface TemplatePageProps {
  pageProps: ITemplatePage;
  footerData: IComponentFooter;
  headerData: IComponentHeader;
}

export const getStaticPaths: GetStaticPaths = async ({ locales = ['en-US'] }) => {
  const { templatePageCollection } = await sdk.TemplatePageAllSlugs();

  const allTemplatePages = templatePageCollection?.items || [];

  const paths = allTemplatePages.flatMap(page => {
    const slug = page?.slug;

    return locales?.map(locale => ({
      params: {
        // since this file uses catch-all routes, returning an empty array generates the homepage
        // see @https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes
        slug: !slug || slug === '/' ? [] : slug.split('/'),
        id: page?.sys.id || '',
      },
      locale,
    }));
  });

  return {
    paths,
    // 'blocking' will allow for ISR but cause a slight delay for pages that haven't been built before
    // see @https://stackoverflow.com/a/67787457
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<TemplatePageProps> = async ({ params, locale }) => {
  const requestedSlug = (params?.slug as string[])?.join('/') || '/';

  // data fetching is split into multiple queries to avoid hitting Contentful's 8KB query size limit
  const { templatePageCollection: templatePage1, componentFooter } = await sdk.TemplatePage1({
    slug: requestedSlug,
    locale,
  });
  const { templatePageCollection: templatePage2 } = await sdk.TemplatePage2({
    slug: requestedSlug,
    locale,
  });

  const { componentHeader } = await sdk.ComponentHeader({
    locale,
  });

  const templatePageItems = templatePage1?.items || [];
  const { componentsCollection, ...metaData } = templatePageItems[0] || { componentsCollection: { items: [] } };
  const components1 = componentsCollection?.items || [];
  const components2 = templatePage2?.items[0]?.componentsCollection?.items || [];

  const pageData = {
    ...metaData,
    componentsCollection: {
      items: [...components1, ...components2],
    },
  };

  return {
    props: {
      pageProps: pageData as ITemplatePage,
      headerData: {
        ...componentHeader,
        headerStyle: pageData.headerStyle,
        productNavigation: pageData?.productNavigation,
      } as HeaderProps,
      footerData: { ...componentFooter, footerStyle: pageData.footerStyle } as FooterProps,
    },
    notFound: !templatePageItems || templatePageItems.length === 0,
    revalidate: 60,
  };
};

const TemplatePage: NextPage<TemplatePageProps> = ({
  pageProps: { slug, seoMetadata, componentsCollection },
  footerData,
  headerData,
}) => {
  if (!seoMetadata) {
    throw new Error(`Page at ${slug} is missing SEO`);
  }
  // if we want to get windowSize, it's more efficient to call hook once per page rather than within each section/component
  const windowSize = useWindowSize();

  return (
    <Layout slug={slug || ''} seoMetadata={seoMetadata} footerData={footerData} headerData={headerData}>
      {componentsCollection &&
        componentsCollection.items.map(
          component =>
            component &&
            !!Object.keys(component).length && (
              <LayoutSection {...component} windowSize={windowSize} key={component?.sys?.id} />
            ),
        )}
    </Layout>
  );
};

export default TemplatePage;
