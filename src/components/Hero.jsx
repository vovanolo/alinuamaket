import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import heroStyles from '../styles/Hero.module.css';

export default function Hero() {
  const [language, setLanguage] = useState('ua');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
  }, [language]);

  function changeLanguage(newLanguage) {
    const newLang = newLanguage || 'ua';
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }

  return (
    <div className="container">
      <div className={heroStyles.ctaBox}>
        <div className="row">
          <div className="col">
            <div className={heroStyles.titleBox}>
              <h1 className="hero__title">
                <span className="text_black">{t('Прокат нових авто')}</span>
                <br />
                <span className="text_grey">{t('у Львові')}</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-3">
            <button className="btn_main">
              {t('Орендувати')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
