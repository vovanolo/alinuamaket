import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/loyalty.css';

export default function LoyaltyCard({ icon, iconAlt, description }) {
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
    <div className="row loyalty__card">
      <div className="col-2">
        <img className="loyalty-card__icon" src={icon} alt={iconAlt} />
      </div>
      <div className="col-10">
        <p className="loyalty-card__description">{description}</p>
      </div>
    </div>
  );
}
