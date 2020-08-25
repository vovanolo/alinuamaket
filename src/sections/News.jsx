import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import NewsCard from '../components/NewsCard';

import '../styles/news.css';

import car_1 from '../images/news/car_1.jpg';
import car_2 from '../images/news/car_2.jpg';
import car_3 from '../images/news/car_3.jpg';

export default function News() {
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
          <h2 className="news-title">{t('Новини')}</h2>
        </div>
      </div>

      <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1">
        <NewsCard
          imgSrc={car_1}
          imgAlt="car_1"
          title={t('Оренда авто')}
          description={t('Для юридичних лиць')}
        />
        <NewsCard
          imgSrc={car_2}
          imgAlt="car_2"
          title={t('Оренда авто')}
          description={t('З водієм')}
        />
        <NewsCard
          imgSrc={car_3}
          imgAlt="car_3"
          title={t('Новинки')}
          description={t('Новий асортимент')}
        />
      </div>
    </div>
  );
}
