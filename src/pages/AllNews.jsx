import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import NewsCard from '../components/NewsCard';
import { fetchNewsData } from '../utils/fetchNewsData';

import '../styles/news.css';

export default function AllNews() {
  const [language, setLanguage] = useState('ua');
  const [news, setNews] = useState([]);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
  }, [language]);

  useEffect(() => {
    fetchNewsData(localStorage.getItem('lang'))
      .then((res) => {
        setNews(res);
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
    <div className="navbar-offset">
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
    </div>
  );
}
