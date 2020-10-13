import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import * as urls from '../urls';
import { fetchCarData } from '../utils/fetchCarData';

import { FormContext } from '../components/ContextProvider';

export default function Summary() {
  const [data] = useContext(FormContext);
  const [loading, setLoading] = useState(false);
  const [carData, setCarData] = useState(null);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useEffect(() => {
    if (!loading && data) {
      fetchCarData(data.selectedCar)
        .then((res) => setCarData(res))
        .catch((error) => console.dir(error));
    }
  }, [loading]);

  if (!loading && !data) {
    return <Redirect to={urls.rent} />;
  }

  return (
    <div className="navbar-offset">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Заявка успішно відправлена</h4>
            <h4>Дякуюємо вам за замовлення</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>Car: {data.selectedCar}</h4>
            <h3>Price: {data.price}</h3>
          </div>
        </div>

        {carData && (
          <div className="row">
            <div className="col">
              <img
                src={carData.photo.path}
                alt={carData.name}
                className="img-responsive"
              />
            </div>
          </div>
        )}

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
