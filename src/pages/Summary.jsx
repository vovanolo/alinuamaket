import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import * as urls from '../urls';
import { fetchCarData } from '../utils/fetchCarData';
import '../styles/summary.css';

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
    console.log(data);
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
          <div className="col-md-6 text-center color_result-red">
            <h4>Заявка успішно відправлена</h4>
            <h4>Дякуємо за замовлення</h4>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <h5>Інформація про замовлення</h5>
            <p>
              Автомобіль: <span>{data.selectedCar}</span>
            </p>
            {carData && (
              <img
                src={carData.photo.path}
                alt={carData.name}
                className="w-100"
              />
            )}
            {/* <p>зараядне тримач</p>
            <p>додаткове місце для дитини</p> */}
            {data.extras && <h6>додаткові опції</h6>}
            {data.extras &&
              data.extras.map((extra) => <p key={extra.id}>{extra.value}</p>)}
            <p></p>
            <hr />
            <p>
              Отримання: <span>{data.receiveDate}</span> о
              <span> {data.receiveTime}</span>, місто
              <span> {data.locationFrom}</span>
            </p>
            <p>
              Повернення: <span>{data.returnDate}</span> о
              <span> {data.returnTime}</span>, місто
              <span> {data.locationTo}</span>
            </p>
            <hr />
            <h5>Замовник</h5>
            <p>
              Імя та прізвище: <span>{data.name}</span>
            </p>
            <p>
              Телефон: <span>{data.phone}</span>
            </p>
            <p>
              E-mail: <span>{data.email}</span>
            </p>
          </div>
        </div>
        <div className="row mt-3">
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
// {carData && (
//   <div className="row">
//     <div className="col">
//       <img
//         src={carData.photo.path}
//         alt={carData.name}
//         className="img-responsive"
//       />
//     </div>
//   </div>
// )}

/* <div className="row">
          <div className="col-md-3">
            <Link to={urls.home} className="btn_main">
              Back to home
            </Link>
          </div>
        </div> */
