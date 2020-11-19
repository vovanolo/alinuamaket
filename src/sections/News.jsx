import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import NewsCard from '../components/NewsCard';
import { fetchNewsData } from '../utils/fetchNewsData';

import '../styles/news.css';

import car_1 from '../images/news/car_1.jpg';
import car_2 from '../images/news/car_2.jpg';
import car_3 from '../images/news/car_3.jpg';
let mounted = true;

export default function News() {
  const [language, setLanguage] = useState('ua');
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
  }, [language]);

  useEffect(() => {
    mounted = true;
    setIsLoading(true);

    fetchNewsData(localStorage.getItem('lang'))
      .then((res) => {
        if (mounted) {
          setNews(res);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
        }
      })
      .finally(() => {
        if (mounted) {
          setIsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
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
          <h2 className="news-title offset-dis_able">{t('Новини')}</h2>
        </div>
      </div>

      {isLoading && <div className="spinner-border" />}
      <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1">
        {error && !isLoading && 'Error!'}
        {news.length > 0 &&
          !isLoading &&
          !error &&
          news.map(({ slug, featured_images, title, content_html }) => (
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
