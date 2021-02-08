import React from 'react';

import urls from '../urls';

import '../styles/news.css';

import Link from './LocalizedLink';

export default function NewsCard({ slug, imgUrl, title, description }) {
  return (
    <Link to={`${urls.news}/${slug}`} className="news-card">
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
