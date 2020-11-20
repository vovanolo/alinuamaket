import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/priceFixed.css';

export default function PriceFixed({ price }) {
  const [language, setLanguage] = useState('ua');
  const { t, i18n } = useTranslation();
  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
  }, [language]);

  function changeLanguage(newLanguage) {
    const newLang = newLanguage;
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }

  return (
    <div className="price-fixed">
      <p className="price-fixed__text">{t('Summary')}</p>
      <span className="price-fixed__price">{price} €</span>
    </div>
  );
}
