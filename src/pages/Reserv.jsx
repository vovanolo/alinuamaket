import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/reserv.css';

import SwitchLocation from '../components/SwitchLocation';
import SwitchTime from '../components/SwitchTime';

export default function Reserv() {
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
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="text_black reserv__title">{t('Бронювання автомобіля')}</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-8">
          <h3 className="text_black reserv__section-title">{t('Налаштування бронювання')}</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-8">
          <SwitchLocation />
        </div>
      </div>

      <div className="row">
        <div className="col-xl-8">
          <SwitchTime />
        </div>
      </div>
    </div>
  );
}
