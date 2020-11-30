import React, { useEffect, useState } from 'react';

import { fetchRentConditions } from '../utils/fetchRentConditions';

import { useTranslate } from '../hooks/useTranslate';

import Loader from '../components/Loader';

export default function RentConditions() {
  const [conditions, setConditions] = useState([]);
  const [conditionsLoading, setConditionsLoading] = useState(false);

  const { i18n } = useTranslate();

  useEffect(() => {
    setConditionsLoading(true);

    fetchRentConditions(i18n.language)
      .then((res) => setConditions(res))
      .catch((err) => console.dir(err))
      .finally(() => setConditionsLoading(false));
  }, [i18n.language]);

  return (
    <div className="navbar-offset">
      <div className="container">
        {conditionsLoading && (
          <div className="py-3">
            <Loader />
          </div>
        )}
        {conditions.length !== 0 && (
          <>
            <h3 className="text-center mb-3">{conditions[0].title}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: conditions[0].content }}
            ></div>
          </>
        )}
      </div>
    </div>
  );
}
