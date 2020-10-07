import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import * as urls from '../urls';

import { FormContext } from '../components/ContextProvider';

export default function Summary() {
  const [data] = useContext(FormContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    console.log(data);
    setLoading(false);
  }, [data]);

  if (!loading && !data) {
    return <Redirect to={urls.rent} />;
  }

  return (
    <div className="navbar-offset">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Car: {data.selectedCar}</h4>
            <h3>Price: {data.price}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Link to={urls.home} className="btn_main">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
