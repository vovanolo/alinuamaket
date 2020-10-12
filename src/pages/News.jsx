import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

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
    fetchNewsData()
      .then((res) => setNews(res))
      .catch((err) => console.dir(err));
  }, []);

  useEffect(() => {
    fetchNewsDataOne(newsSlug)
      .then((res) => setNewsData(res))
      .catch((err) => console.dir(err));
  }, [pathname]);

  return (
    <div className="navbar-offset">
      <div className="container">
        <div className="row">
          <div className="col-xl-2 col-lg-3 col-md-4">
            {news.map(({ slug, news_image, name, description }) => (
              <div key={slug} className="mb-3">
                <NewsCard
                  slug={slug}
                  imgUrl={news_image.path}
                  title={name}
                  description={description}
                />
              </div>
            ))}
          </div>
          {newsData && (
            <div className="col-xl-10 col-lg-9 col-md-8 mt-lg-0 mt-md-3 mt-3">
              <img
                src={newsData.news_image.path}
                alt={newsData.name}
                style={{ float: 'left' }}
              />
              <h2 className="mt-3">{newsData.name}</h2>
              <p className="mt-1">{newsData.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
