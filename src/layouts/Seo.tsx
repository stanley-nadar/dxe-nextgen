import Head from 'next/head';

import type { IMetaSeo } from 'graphql/types';
import type { FC } from 'react';

const siteMetadata = {
  siteName: 'Freshworks',
  title: 'Freshworks | Modern and Easy Customer and Employee Experience Software',
  description: 'Freshworks makes ridiculously easy-to-use marketing, sales, support and IT solutions.',
  domain: 'freshworks.com',
};

interface SeoProps extends IMetaSeo {
  slug: string;
}

const SEO: FC<SeoProps> = ({ pageTitle, pageDescription, noFollow, noIndex, openGraphImage, slug }) => {
  const seoTitle = pageTitle ? `${pageTitle} | ${siteMetadata.siteName}` : siteMetadata.title;
  const seoDescription = pageDescription || siteMetadata.description;
  const seoImage = openGraphImage?.url || '/images/freshworksBanner.png';
  const baseUrl = `https://${siteMetadata.domain}`;
  const seoUrl = slug ? `${baseUrl}/${slug}` : baseUrl;
  const twitterHandle = '@FreshworksInc';

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="application-name" content={seoTitle} />
      <meta name="robots" content={`${noIndex ? 'no' : ''}index, ${noFollow ? 'no' : ''}follow`} />
      <link rel="canonical" href={seoUrl} />

      <meta property="og:site_name" content={siteMetadata.siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
    </Head>
  );
};

export default SEO;
