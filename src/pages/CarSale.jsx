import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function CarSale() {
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
    <div className="navbar-offset">
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center flex-column">
            <h3>
              {t('Для замовлення автовикупу звяжіться з нами за телефоном')}
            </h3>
            <h3 className="mt-3">
              <b>+38 098 777 1600</b>
            </h3>
          </div>
        </div>
        <div style={{ marginTop: '450px' }}></div>
      </div>
    </div>
  );
}
