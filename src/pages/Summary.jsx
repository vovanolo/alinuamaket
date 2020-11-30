import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import urls from '../urls';

import { fetchCarData } from '../utils/fetchCarData';
import { getLocalizedUrl } from '../utils/getLocalizedUrl';

import '../styles/summary.css';

import { FormContext } from '../components/ContextProvider';
import Link from '../components/LocalizedLink';

export default function Summary() {
  const [data] = useContext(FormContext);
  const [loading, setLoading] = useState(false);
  const [carData, setCarData] = useState(null);

  const [language, setLanguage] = useState('ua');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
  }, [language]);

  function changeLanguage(newLanguage) {
    const newLang = newLanguage;
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }

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
    return <Redirect to={getLocalizedUrl(urls.rent)} />;
  }

  return (
    <div className="navbar-offset">
      <div className="container justify-content-center">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center color_result-red">
            <h4>{t('Заявка успішно відправлена')}</h4>
            <h4>{t('Дякуємо за замовлення')}</h4>
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
          <div className="col-md-6">
            <h5>{t('Інформація про замовлення')}</h5>
            {carData && (
              <p>
                {t('Автомобіль:')} <span>{carData.name}</span>
              </p>
            )}
            {carData && (
              <img
                src={carData.photo.path}
                alt={carData.name}
                className="w-100"
              />
            )}
            {/* <p>зараядне тримач</p>
            <p>додаткове місце для дитини</p> */}
            {data.extras.length !== 0 && <h6>{t('додаткові опції')}</h6>}
            {data.extras &&
              data.extras.map((extra) => <p key={extra.id}>{extra.value}</p>)}
            <p></p>
            <hr />
            <p>
              {t('від')}: <span>{data.receiveDate}</span> о
              <span> {data.receiveTime}</span>, {t('місто')}
              <span> {data.locationFrom}</span>
            </p>
            <p>
              {t('до')}: <span>{data.returnDate}</span> о
              <span> {data.returnTime}</span>, {t('місто')}
              <span> {data.locationFrom}</span>
            </p>
            <hr />
            <h5>{t('Замовник')}</h5>
            <p>
              {t('Імя та прізвище')}: <span>{data.name}</span>
            </p>
            <p>
              {t('Телефон')}: <span>{data.phone}</span>
            </p>
            <p>
              {t('E-mail')}: <span>{data.email}</span>
            </p>
          </div>
        </div>
        <div className="row mt-3 mb-3 justify-content-center">
          <div className="col-md-6">
            <Link to={urls.home} className="btn_main">
              {t('На головну')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Another one
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
