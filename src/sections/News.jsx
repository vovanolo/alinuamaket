import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import NewsCard from '../components/NewsCard';

import '../styles/news.css';

import car_1 from '../images/news/car_1.jpg';
import car_2 from '../images/news/car_2.jpg';
import car_3 from '../images/news/car_3.jpg';

const newsMock = [
  {
    id: 1,
    imgUrl: car_1,
    title: 'Оренда авто',
    description: 'Для юридичних лиць',
  },
  {
    id: 2,
    imgUrl: car_2,
    title: 'Оренда авто',
    description: 'З водієм',
  },
  {
    id: 3,
    imgUrl: car_3,
    title: 'Новинки',
    description: 'Новий асортимент',
  },
];

export default function News() {
  const [language, setLanguage] = useState('ua');
  const [news, setNews] = useState(newsMock);

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
        {news.map(({ id, imgUrl, title, description }) => (
          <NewsCard
            key={id}
            id={id}
            imgUrl={imgUrl}
            imgAlt={t(title)}
            title={t(title)}
            description={t(description)}
          />
        ))}
      </div>
    </div>
  );
}
