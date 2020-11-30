import React, { useState, useEffect } from 'react';

import AdditionalOptionsCard from '../components/AdditionalOptionsCard';
import { fetchAdditionalOptions } from '../utils/fetchAdditionalOptions';

import { useTranslate } from '../hooks/useTranslate';

import '../styles/news.css';

export default function AllAdditionalOptions() {
  const [news, setNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(false);

  const { t, i18n } = useTranslate();

  useEffect(() => {
    setNewsLoading(true);

    fetchAdditionalOptions(i18n.language)
      .then((res) => {
        setNews(res);
      })
      .catch((err) => console.dir(err))
      .then(() => setNewsLoading(false));
  }, [i18n.language]);

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

        {newsLoading && (
          <div className="row">
            <div className="col-12 mt-3 mb-lg-0 mb-md-3 mb-3">
              <div className="d-flex justify-content-center">
                <div
                  className="spinner-border"
                  style={{
                    width: '3rem',
                    height: '3rem',
                    margin: '50px 0',
                  }}
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1">
          {news.length > 0 &&
            news.map(({ slug, featured_images, title, content_html }) => (
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
