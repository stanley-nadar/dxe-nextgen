import SEO from 'layouts/Seo';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import ProductHeader from 'components/HeaderProduct/Header';

import type { IComponentFooter, IComponentHeader, IMetaSeo } from 'graphql/types';
import type { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  slug: string;
  seoMetadata: IMetaSeo;
  footerData: IComponentFooter;
  headerData: IComponentHeader & {
    headerStyle?: string;
    productNavigation?: IComponentHeader;
  };
}

const Layout: FC<LayoutProps> = ({ children, slug, seoMetadata, headerData, footerData }) => {
  const { productNavigation } = headerData;

  const grabHeaderComponent = productNavigation ? (
    <>
      <Header {...headerData} productNavActive={true} />
      <ProductHeader headerStyle={headerData?.headerStyle || 'Global Nav'} {...productNavigation} />
    </>
  ) : (
    <Header {...headerData} productNavActive={false} />
  );

  return (
    <>
      {grabHeaderComponent}
      <SEO slug={slug} {...seoMetadata} />
      <main id="main-content">{children}</main>
      <Footer {...footerData} />
    </>
  );
};

export default Layout;
