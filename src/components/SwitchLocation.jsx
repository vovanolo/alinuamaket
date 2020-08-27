import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/switch.css';

import circleSwitch from '../images/circle_switch.svg';

export default function Switch() {
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
    <div className="switch">
      <button className="switch__btn">
        <img src={circleSwitch} alt="switch icon" />
      </button>

      <div className="switch__box">
        <p className="switch__title text_grey">{t('від')}</p>
        <input type="text" className="switch__input" placeholder={t('Вкажіть локацію')} />
        <sub className="switch__sub-title text_grey">{t('місто, область, країна')}</sub>
      </div>

      <div className="switch__box">
        <p className="switch__title text_grey">{t('від')}</p>
        <input type="text" className="switch__input" placeholder={t('Вкажіть локацію')} />
        <sub className="switch__sub-title text_grey">{t('місто, область, країна')}</sub>
      </div>
    </div>
  );
}
