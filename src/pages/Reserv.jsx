import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/reserv.css';

import SwitchLocation from '../components/SwitchLocation';
import SwitchTime from '../components/SwitchTime';
import Option from '../components/Option';

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

      <div className="row">
        <div className="col-xl-8">
          <h3 className="text_black reserv__section-title">{t('Додаткові опції')}</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-8">
          <div className="row row-cols-md-2 row-cols-1">
            <Option id={1} text={t('Зарядне/тримач для тел 5€ /Доба')} />
            <Option id={2} text={t('Дитяче крісло 5€ /Доба')} />
            <Option id={3} text={t('Додатковий водій 10€ /Одноразово')} />
            <Option id={4} text={t('GPS навігація 5€ /Доба')} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-8">
          <h3 className="text_black reserv__section-title">{t('Особисті дані')}</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-8">
          <div className="form-row mb-3">
            <div className="col">
              <input className="input" type="text" placeholder={t('Ваше ім\'я')} />
            </div>
          </div>

          <div className="form-row mb-3">
            <div className="col">
              <input className="input" type="tel" placeholder={t('Телефон')} />
            </div>
            <div className="col">
              <input className="input" type="email" placeholder="Email" />
            </div>
          </div>

          <div className="form-row mb-3">
            <div className="col">
              <textarea className="input" placeholder={t('Коментар')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
