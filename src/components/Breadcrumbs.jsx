import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as urls from '../urls';

import '../styles/breadcrumbs2.css';

export default function Breadcrumbs({ active }) {
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

  const itemDefaultClasses = ['breadcrumbs2__item'];
  const itemActiveClasses = [
    ...itemDefaultClasses,
    'breadcrumbs2__item_active',
  ];

  return (
    <div className="breadcrumbs2">
      <div
        className={
          active === 'rent'
            ? itemActiveClasses.join(' ') + ' arrow arrow_red'
            : itemDefaultClasses.join(' ') + ' arrow arrow_grey'
        }
      >
        <span>{t('Вибір')}</span>
      </div>
      <div
        className={
          active === 'reserv'
            ? itemActiveClasses.join(' ')
            : itemDefaultClasses.join(' ')
        }
      >
        <span>{t('Бронювання')}</span>
      </div>
    </div>
  );
}
