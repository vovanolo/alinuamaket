import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import urls from '../urls';

import '../styles/news.css';

import Link from './LocalizedLink';

export default function AdditionalOptionsCard({ slug, imgUrl, title }) {
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
    <Link to={`${urls.additionalOptions}/${slug}`} className="news-card">
      <img
        src={imgUrl}
        className="img-responsive img-responsive_cover"
        alt={title}
      />

      <div className="news-card__info-box">
        <h5 className="news-card__title">{title}</h5>
      </div>
    </Link>
  );
}
