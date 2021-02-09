import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LocalizedLink({ to, children, ...props }) {
  const { i18n } = useTranslation();

  const getLocalizedLink = (url) => {
    switch (typeof url) {
      case 'string':
        return `/${i18n.language}${url}`;
      case 'object':
        return {
          ...url,
          pathname: `/${i18n.language}${url.pathname}`,
        };

      default:
        break;
    }
  };

  return (
    <Link to={getLocalizedLink(to)} {...props}>
      {children}
    </Link>
  );
}

export default LocalizedLink;
