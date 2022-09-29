export const parseUrl = (href: string) => {
  if (!href) {
    return {
      role: 'none',
      tabIndex: -1,
      cursor: 'auto',
      isInternal: false,
    };
  }

  if (href[0] === '#') {
    return {
      isInternal: true,
      cursor: 'pointer',
      tabIndex: 0,
      href,
    };
  }

  const domain = 'freshworks.com';
  const url = new URL(href);
  const isInternal = url.hostname === `www.${domain}` || url.hostname === domain;

  return {
    isInternal,
    rel: isInternal ? '' : 'noreferrer noopener',
    target: isInternal ? '' : '_blank',
    href: isInternal ? url.href.split(url.host)[1] : href,
  };
};

export default parseUrl;
