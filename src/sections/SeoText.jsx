import React, { useEffect, useState } from 'react';

import { fetchSeoText } from '../utils/fetchSeoText';
let mounted = true;

export default function SeoText() {
  const [seo, setSeo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    mounted = true;
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

    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div className="navbar-offset">
      <div className="container">
        {isLoading && <div className="spinner-border" />}
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
