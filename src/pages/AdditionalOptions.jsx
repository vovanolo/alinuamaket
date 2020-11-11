import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import AdditionalOptionsCard from '../components/AdditionalOptionsCard';

import { fetchAdditionalOptions } from '../utils/fetchAdditionalOptions';
import { fetchAdditionalOptionOne } from '../utils/fetchAdditionalOptionOne';

export default function AdditionalOptions() {
  const [additionalInfo, setAdditionalInfo] = useState([]);
  const [additionalInfoData, setAdditionalInfoData] = useState(null);

  const { slug: additionalSlug } = useParams();

  const { pathname } = useLocation();

  useEffect(() => {
    // setNews(newsMock);
    fetchAdditionalOptions(localStorage.getItem('lang'))
      .then((res) => setAdditionalInfo(res))
      .catch((err) => console.dir(err));
  }, []);

  useEffect(() => {
    fetchAdditionalOptionOne(additionalSlug, localStorage.getItem('lang'))
      .then((res) => setAdditionalInfoData(res))
      .catch((err) => console.dir(err));
  }, [pathname]);

  return (
    <div className="navbar-offset">
      <div className="container">
        <div className="row mb-5">
          <div
            style={{ backgroundColor: '#00bcff' }}
            className="col-xl-3 col-lg-4 col-md-4 order-md-1 order-11 p-3"
          >
            {additionalInfo.map(
              ({ slug, featured_images, title, content_html }) => (
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
              )
            )}
          </div>
          {additionalInfoData && (
            <div className="col-xl-9 col-lg-8 col-md-8 mt-lg-0 mt-md-3 mt-3 order-md-12 order-1">
              {/* <div>
                <img
                  className="img-responsive"
                  src={additionalInfoData.featured_images[0].path}
                  alt={additionalInfoData.title}
                  style={{
                    float: 'left',
                    maxHeight: '300px',
                    maxWidth: '500px',
                  }}
                />
              </div> */}
              <h2 className="mt-3 text-center">{additionalInfoData.title}</h2>
              {/* <p className="mt-1">{newsData.body}</p> */}
              {/* {newsData.body} */}
              <p
                className="mt-1"
                dangerouslySetInnerHTML={{
                  __html: additionalInfoData.content_html,
                }}
              ></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
