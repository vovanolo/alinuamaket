import React, { useState, useEffect } from 'react';

import { fetchNewsData } from '../utils/fetchNewsData';

import NewsCard from '../components/NewsCard';

import '../styles/news.css';
import { useTranslate } from '../hooks/useTranslate';

let mounted = true;

export default function News() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { t, i18n } = useTranslate();

  mounted = true;

  useEffect(() => {
    setIsLoading(true);

    fetchNewsData(i18n.language)
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
  }, [i18n.language]);

  useEffect(() => {
    return () => (mounted = false);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="news-title main-news_offset-disable">{t('Новини')}</h2>
        </div>
      </div>

      {isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" />
        </div>
      )}
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
