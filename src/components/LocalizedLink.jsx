import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function LocalizedLink({ to, children, ...props }) {
  const { i18n } = useTranslation();

  let url = null;

  const formatUrl = (url) => `/${i18n.language}${url}`;

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
