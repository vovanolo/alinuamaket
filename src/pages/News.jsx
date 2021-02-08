import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { fetchNewsData } from '../utils/fetchNewsData';
import { fetchNewsDataOne } from '../utils/fetchNewsDataOne';

import { useTranslate } from '../hooks/useTranslate';

import Link from '../components/LocalizedLink';
import Loader from '../components/Loader';

export default function News() {
  const [news, setNews] = useState([]);
  const [newsData, setNewsData] = useState(null);
  const [newsLoading, setNewsLoading] = useState(false);
  const [newsDataLoading, setNewsDataLoading] = useState(false);

  const { slug: newsSlug } = useParams();

  const { pathname } = useLocation();

  const { i18n } = useTranslate();

  useEffect(() => {
    setNewsLoading(true);

    fetchNewsData(i18n.language)
      .then((res) => setNews(res.reverse().slice(0, 6)))
      .catch((err) => console.dir(err))
      .finally(() => setNewsLoading(false));
  }, [i18n.language]);

  useEffect(() => {
    setNewsDataLoading(true);

    fetchNewsDataOne(newsSlug, i18n.language)
      .then((res) => setNewsData(res))
      .catch((err) => console.dir(err))
      .finally(() => setNewsDataLoading(false));
  }, [pathname, i18n.language]);

  return (
    <div className="navbar-offset">
      <div className="container">
        <div className="row mb-5">
          <div
            style={{ backgroundColor: 'rgb(214 213 213)' }}
            className="col-xl-3 col-lg-4 col-md-4 order-md-1 order-11 p-3"
          >
            {newsLoading && <Loader />}
            {news.length > 0 &&
              news.map(({ slug, featured_images, title, content_html }) => (
                <div key={slug} className="mb-3" style={{ maxHeight: '600px' }}>
                  <Link to={`/news/${slug}`} className="news-card">
                    <img
                      src={featured_images[0].path}
                      className="img-responsive img-responsive_cover"
                      alt={title}
                    />

                    <div className="news-card__info-box">
                      <h5 className="news-card__title news-card__lower-case">
                        {title}
                      </h5>
                    </div>
                  </Link>
                </div>
              ))}
          </div>

          {newsDataLoading && (
            <div className="col-xl-9 col-lg-8 col-md-8 mt-lg-0 mt-md-3 mt-3 order-md-12 order-1">
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-danger" />
              </div>
            </div>
          )}
          {newsData && (
            <div className="col-xl-9 col-lg-8 col-md-8 mt-lg-0 mt-md-3 mt-3 order-md-12 order-1">
              <h1 className="mt-3 mb-3 text-center">{newsData.title}</h1>
              <p
                className="mt-1"
                dangerouslySetInnerHTML={{ __html: newsData.content_html }}
              ></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
