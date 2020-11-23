import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import AdditionalOptionsCard from '../components/AdditionalOptionsCard';
import { fetchAdditionalOptions } from '../utils/fetchAdditionalOptions';

import '../styles/news.css';

export default function AllAdditionalOptions() {
  const [language, setLanguage] = useState('ua');
  const [news, setNews] = useState([]);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
  }, [language]);

  useEffect(() => {
    fetchAdditionalOptions(localStorage.getItem('lang'))
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

  return (
    <div className="navbar-offset" style={{ minHeight: 'calc(100vh - 390px)' }}>
      <div className="container mb-5">
        <div className="row">
          <div className="col">
            <h2 className="news-title offset-dis_able">
              {t('Додаткові опції')}
            </h2>
          </div>
        </div>

        <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1">
          {news.map(({ slug, featured_images, title, content_html }) => (
            <div key={slug} className="col mt-3 mb-lg-0 mb-md-3 mb-3">
              <AdditionalOptionsCard
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
