import React, { useEffect, useState } from 'react';

import { fetchConfidentialPolicy } from '../utils/fetchConfidentialPolicy';

export default function CondfidentialPolicy() {
  const [confidential, setConfidential] = useState([]);

  useEffect(() => {
    fetchConfidentialPolicy(localStorage.getItem('lang'))
      .then((res) => setConfidential(res))
      .catch((err) => console.dir(err));
  }, []);
  return (
    <div className="navbar-offset">
      <div className="container">
        {confidential.length !== 0 && (
          <>
            <h3 className="text-center mb-3">{confidential[0].title}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: confidential[0].content }}
            ></div>
          </>
        )}
        {/* <h1>{seo.title}</h1> */}
      </div>
    </div>
  );
}
