import React, { useEffect, useState } from 'react';

import { fetchSeoText } from '../utils/fetchSeoText';

export default function SeoText() {
  const [seo, setSeo] = useState([]);

  useEffect(() => {
    fetchSeoText(localStorage.getItem('lang'))
      .then((res) => setSeo(res))
      .catch((err) => console.dir(err));
  }, []);
  return (
    <div className="navbar-offset">
      <div className="container">
        {seo.length !== 0 && (
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
