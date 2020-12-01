import React from 'react';
import { Link } from 'react-router-dom';

import { useTranslate } from '../hooks/useTranslate';

export default function LocalizedLink({ to, children, ...props }) {
  const { i18n } = useTranslate();

  let url = null;

  const formatUrl = (url) =>
    url === '/' ? `/${i18n.language}` : `/${i18n.language}${url}`;

  if (typeof to === 'object') {
    url = {
      ...to,
      pathname: formatUrl(to.pathname),
    };
  } else {
    url = formatUrl(to);
  }

  return (
    <Link to={url} {...props}>
      {children}
    </Link>
  );
}
