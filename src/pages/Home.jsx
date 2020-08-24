import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const newLanguage = localStorage.getItem('lang');
    console.log(newLanguage);
    i18n.changeLanguage(newLanguage);
  }, []);

  return (
    <div>
      {t('Привіт, Світ!')}
    </div>
  );
}
