import React, { useEffect, useState } from 'react';

import { fetchRentConditions } from '../utils/fetchRentConditions';

export default function RentConditions() {
  const [conditions, setConditions] = useState([]);

  useEffect(() => {
    fetchRentConditions(localStorage.getItem('lang'))
      .then((res) => setConditions(res))
      .catch((err) => console.dir(err));
  }, []);
  return (
    <div className="navbar-offset">
      <div className="container">
        {conditions.length !== 0 && (
          <>
            <h3 className="text-center mb-3">{conditions[0].title}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: conditions[0].content }}
            ></div>
          </>
        )}
        {/* <h1>{seo.title}</h1> */}
      </div>
    </div>
  );
}
