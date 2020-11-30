import React, { useEffect, useState } from 'react';

import { fetchConfidentialPolicy } from '../utils/fetchConfidentialPolicy';

import { useTranslate } from '../hooks/useTranslate';

import Loader from '../components/Loader';

export default function ConfidentialPolicy() {
  const [confidential, setConfidential] = useState([]);
  const [confLoading, setConfLoading] = useState(false);

  const { i18n } = useTranslate();

  useEffect(() => {
    setConfLoading(true);

    fetchConfidentialPolicy(i18n.language)
      .then((res) => setConfidential(res))
      .catch((err) => console.dir(err))
      .finally(() => setConfLoading(false));
  }, [i18n.language]);

  return (
    <div className="navbar-offset">
      <div className="container">
        {confLoading && <Loader />}
        {confidential.length !== 0 && (
          <>
            <h3 className="text-center mb-3">{confidential[0].title}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: confidential[0].content }}
            ></div>
          </>
        )}
      </div>
    </div>
  );
}
