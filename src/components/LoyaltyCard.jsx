import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LoyaltyCard({ icon, iconAlt, description, margin }) {
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
    <div className={`row align-items-center mb-${margin}`}>
      <div className="col-lg-3 col-12 mb-lg-0 mb-3  text-lg-left text-center ">
        <img className="loyalty-card__icon" src={icon} alt={iconAlt} />
      </div>
      <div className="col-lg-9 col-12 text-lg-left text-center">
        <p className="loyalty-card__description">{description}</p>
      </div>
    </div>
  );
}
