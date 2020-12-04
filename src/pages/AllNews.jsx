import React, { useState, useEffect } from 'react';

import { fetchNewsData } from '../utils/fetchNewsData';

import { useTranslate } from '../hooks/useTranslate';

import '../styles/news.css';

import NewsCard from '../components/NewsCard';

export default function AllNews() {
  const [news, setNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(false);

  const { t, i18n } = useTranslate();

  useEffect(() => {
    setNewsLoading(true);

    fetchNewsData(i18n.language)
      .then((res) => {
        setNews(res);
      })
      .catch((err) => console.dir(err))
      .finally(() => setNewsLoading(false));
  }, [i18n.language]);

  return (
    <div className="navbar-offset mb-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="news-title offset-dis_able">{t('Новини')}</h2>
          </div>
        </div>

        {newsLoading && (
          <div className="d-flex justify-content-center py-3">
            <div className="spinner-border text-danger" />
          </div>
        )}
        <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1">
          {news.length > 0 &&
            news.map(({ slug, featured_images, title, content_html }) => (
              <div key={slug} className="col mt-3 mb-lg-0 mb-md-3 mb-3">
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
