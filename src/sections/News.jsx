import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import NewsCard from '../components/NewsCard';
import { fetchNewsData } from '../utils/fetchNewsData';

import '../styles/news.css';

import car_1 from '../images/news/car_1.jpg';
import car_2 from '../images/news/car_2.jpg';
import car_3 from '../images/news/car_3.jpg';

export default function News() {
  const [language, setLanguage] = useState('ua');
  const [news, setNews] = useState([]);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
  }, [language]);

  useEffect(() => {
    fetchNewsData(localStorage.getItem('lang'))
      .then((res) => {
        setNews(res.slice(0, 2));
      })
      .catch((err) => console.dir(err));
  }, []);

  function changeLanguage(newLanguage) {
    const newLang = newLanguage;
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }
  // console.log(localStorage.getItem('lang'));

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="news-title">{t('Новини')}</h2>
        </div>
      </div>

      <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1">
        {news.map(({ slug, featured_images, title, content_html }) => (
          <div key={slug} className="col mb-lg-0 mb-md-3 mb-3">
            <NewsCard
              slug={slug}
              imgUrl={featured_images[0].path}
              imgAlt={t(title)}
              title={t(title)}
              description={t(content_html)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
