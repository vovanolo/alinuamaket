import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import * as urls from '../urls';

import '../styles/car_card.css';

import place from '../images/Places.svg';
import wind from '../images/ac.svg';
import group from '../images/deposit.svg';

import imgPlaceholder from '../images/car_info/car1.png';

export default function CarCard({
  name,
  year,
  placesCount,
  air,
  price,
  deposit,
  photoUrl,
  slug,
  city,
}) {
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
  return (
    <div className="col mb-4">
      <div className="row">
        <div className="col">
          <div className="car-card__img-container">
            <img
              src={photoUrl.path}
              className="img-responsive img-responsive_cover"
              alt={name}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h3 className="card-title">{name}</h3>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <ul className="car-info__price-list">
            {price.map((priceElem) => (
              <li key={priceElem.days} className="car-info__price-list-item">
                <div className="car-info__price-list-days">
                  {priceElem.days}
                </div>
                <div className="car-info__price-list-price">
                  {priceElem.money}€
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 d-flex justify-content-between">
          <div className="mt-1">
            <img className="car-card__spec-icon" src={place} alt="places" />
            <span className="car-card__spec-name">{placesCount}</span>
          </div>

          {air == 1 && (
            <div className="mt-1">
              <img
                width="20"
                height="20"
                className="car-card__spec-icon"
                src={wind}
                alt="konduk"
              />
            </div>
          )}

          <div className="mt-1">
            <img
              width="20"
              height="20"
              className="car-card__spec-icon"
              src={group}
              alt="price"
            />
            <span className="car-card__spec-name">{deposit}€</span>
          </div>
        </div>
        <div className="col-lg-6">
          <Link
            to={{
              pathname: `${urls.reserv}/${slug}`,
              state: {
                city: city,
              },
            }}
            className="btn_main btn_slim mb-0"
          >
            {t('Бронювати')}
          </Link>
        </div>
      </div>
    </div>
  );
}

CarCard.defaultProps = {
  photoUrl: imgPlaceholder,
  year: new Date().getFullYear(),
};
