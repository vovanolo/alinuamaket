import React, { useEffect, useState } from 'react';

import { fetchSeoText } from '../utils/fetchSeoText';

import { useTranslate } from '../hooks/useTranslate';

let mounted;
export default function SeoText() {
  const [seo, setSeo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { t, i18n } = useTranslate();

  mounted = true;

  useEffect(() => {
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    setIsLoading(true);

    fetchSeoText(localStorage.getItem('lang'))
      .then((res) => {
        if (mounted) {
          setSeo(res);
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

  return (
    <div className="navbar-offset">
      <div className="container">
        {isLoading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" />
          </div>
        )}
        {error && !isLoading && 'Error!'}

        {seo.length > 0 && !isLoading && !error && seo.length !== 0 && (
          <>
            <h3 className="text-center mb-3">{seo[0].title}</h3>
            <div className="row">
              <div className="col-md-12">
                <div dangerouslySetInnerHTML={{ __html: seo[0].content }}></div>
              </div>
            </div>
          </>
        )}
        {/* <h1>{seo.title}</h1> */}
      </div>
    </div>
  );
}
