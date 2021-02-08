import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import urls from '../urls';

import { fetchAdditionalOptions } from '../utils/fetchAdditionalOptions';
import { fetchAdditionalOptionOne } from '../utils/fetchAdditionalOptionOne';

import { useTranslate } from '../hooks/useTranslate';

import Link from '../components/LocalizedLink';

export default function AdditionalOptions() {
  const [additionalInfo, setAdditionalInfo] = useState([]);
  const [additionalInfoData, setAdditionalInfoData] = useState(null);
  const [servicesLoading, setServicesLoading] = useState(false);
  const [serviceLoading, setServiceLoading] = useState(false);

  const { slug: additionalSlug } = useParams();

  const { pathname } = useLocation();

  const { i18n } = useTranslate();

  useEffect(() => {
    // setNews(newsMock);
    setServicesLoading(true);

    fetchAdditionalOptions(i18n.language)
      .then((res) => setAdditionalInfo(res.reverse()))
      .catch((err) => console.dir(err))
      .finally(() => setServicesLoading(false));
  }, [i18n.language]);

  useEffect(() => {
    setServiceLoading(true);
    setAdditionalInfoData(null);

    fetchAdditionalOptionOne(additionalSlug, i18n.language)
      .then((res) => setAdditionalInfoData(res))
      .catch((err) => console.dir(err))
      .finally(() => setServiceLoading(false));
  }, [pathname, i18n.language]);

  return (
    <div className="navbar-offset">
      <div className="container">
        <div className="row mb-5">
          <div
            style={{ backgroundColor: 'rgb(214 213 213)' }}
            className="col-xl-3 col-lg-4 col-md-4 order-md-1 order-11 p-3"
          >
            {servicesLoading && (
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
            )}
            {additionalInfo.length > 0 &&
              additionalInfo.map(
                ({ slug, featured_images, title, content_html }) => (
                  <div
                    key={slug}
                    className="mb-3"
                    style={{ maxHeight: '600px' }}
                  >
                    <Link
                      to={`${urls.additionalOptions}/${slug}`}
                      className="news-card"
                    >
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
          <div className="col-xl-9 col-lg-8 col-md-8 mt-lg-0 mt-md-3 mt-3 order-md-12 order-1">
            {serviceLoading && (
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
            )}
            {additionalInfoData && (
              <>
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
                <h1 className="mt-3 mb-3 text-center">
                  {additionalInfoData.title}
                </h1>
                {/* <p className="mt-1">{newsData.body}</p> */}
                {/* {newsData.body} */}
                <p
                  className="mt-1"
                  dangerouslySetInnerHTML={{
                    __html: additionalInfoData.content_html,
                  }}
                ></p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
