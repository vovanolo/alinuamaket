import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { news } from '../urls';

import '../styles/news.css';

export default function NewsCard({ id, imgUrl, imgAlt, title, description }) {
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
    <div className="col mb-4">
      <Link to={`${news}/${id}`} className="news-card">
        <img
          src={imgUrl}
          className="img-responsive img-responsive_cover"
          alt={imgAlt}
        />

        <div className="news-card__info-box">
          <h5 className="news-card__title">{title}</h5>
          <p className="news-card__description">{description}</p>
        </div>
      </Link>
    </div>
  );
}
