module.exports = {
  locales: ['en-US', 'es'],
  defaultLocale: 'en-US',
  pages: {
    '*': ['common'],
  },
  loadLocaleFrom: (locale, namespace) => import(`./src/locales/${locale}/${namespace}`).then(m => m.default),
};
