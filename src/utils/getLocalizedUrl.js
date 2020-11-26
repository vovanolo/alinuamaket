export function getLocalizedUrl(url) {
  const formatUrl = (url) => `/${localStorage.getItem('lang') || 'ua'}${url}`;

  if (typeof to === 'object') {
    return {
      ...url,
      pathname: formatUrl(url.pathname),
    };
  } else {
    return formatUrl(url);
  }
}
