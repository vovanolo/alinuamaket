import React from 'react';
import { useTranslation } from 'react-i18next';

import Link from './LocalizedLink';

export default function LocalizedLink({ to, children, ...props }) {
  const [, ri18n] = useTranslation();

  return (
    <Link to={`/${ri18n.language}${to}`} {...props}>
      {children}
    </Link>
  );
}
