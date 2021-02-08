import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LocalizedLink({ to, children, ...props }) {
  const { i18n } = useTranslation();

  const getLocalizedLink = (url) => {
    return `/${i18n.language}${url}`;
  };

  return (
    <Link to={getLocalizedLink(to)} {...props}>
      {children}
    </Link>
  );
}

export default LocalizedLink;
