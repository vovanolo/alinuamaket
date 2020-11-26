import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function LocalizedLink({ to, children, ...props }) {
  const { i18n } = useTranslation();

  return (
    <Link to={`/${i18n.language}${to}`} {...props}>
      {children}
    </Link>
  );
}
