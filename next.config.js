/* eslint-disable @typescript-eslint/no-var-requires */
const nextTranslate = require('next-translate');

const nextConfig = {
  images: {
    domains: ['images.ctfassets.net', 'dam.freshworks.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
  redirects: async () => [
    {
      source: '/en/:path',
      destination: '/:path',
      permanent: false,
    },
    {
      source: '/en',
      destination: '/',
      permanent: false,
    },
  ],
};

module.exports = nextTranslate(nextConfig);
