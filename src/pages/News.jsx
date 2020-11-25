import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import NewsCard from '../components/NewsCard';

import { fetchNewsData } from '../utils/fetchNewsData';
import { fetchNewsDataOne } from '../utils/fetchNewsDataOne';

import car_1 from '../images/news/car_1.jpg';
import car_2 from '../images/news/car_2.jpg';
import car_3 from '../images/news/car_3.jpg';

export default function News() {
  const [news, setNews] = useState([]);
  const [newsData, setNewsData] = useState(null);

  const { slug: newsSlug } = useParams();

  const { pathname } = useLocation();

  useEffect(() => {
    // setNews(newsMock);
    fetchNewsData(localStorage.getItem('lang'))
      .then((res) => setNews(res))
      .catch((err) => console.dir(err));
  }, []);

  useEffect(() => {
    fetchNewsDataOne(newsSlug, localStorage.getItem('lang'))
      .then((res) => setNewsData(res))
      .catch((err) => console.dir(err));
  }, [pathname]);

  return (
    <div className="navbar-offset">
      <div className="container">
        <div className="row mb-5">
          <div
            style={{ backgroundColor: 'rgb(214 213 213)' }}
            className="col-xl-3 col-lg-4 col-md-4 order-md-1 order-11 p-3"
          >
            {news.map(({ slug, featured_images, title, content_html }) => (
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
          {newsData && (
            <div className="col-xl-9 col-lg-8 col-md-8 mt-lg-0 mt-md-3 mt-3 order-md-12 order-1">
              {/* <div>
                <img
                  className="img-responsive"
                  src={newsData.featured_images[0].path}
                  alt={newsData.title}
                  style={{
                    float: 'left',
                    maxHeight: '300px',
                    maxWidth: '500px',
                  }}
                />
              </div> */}
              <h2 className="mt-3 mb-3 text-center">{newsData.title}</h2>
              {/* <p className="mt-1">{newsData.body}</p> */}
              {/* {newsData.body} */}
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
