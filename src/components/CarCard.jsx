import React from 'react';
import { Link } from 'react-router-dom';

import * as urls from '../urls';

import '../styles/car_card.css';

import place from '../images/Places.svg';
import wind from '../images/wind.svg';
import group from '../images/Group 388.svg';

import imgPlaceholder from '../images/car_info/car1.png';

function CarCard({ name, year, placesCount, air, price, photoUrl, slug }) {
  // console.log(Object.values(price[0]));
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
            <li className="car-info__price-list-item">
              <div className="car-info__price-list-days">1-2</div>
              <div className="car-info__price-list-price">120€</div>
            </li>
            <li className="car-info__price-list-item">
              <div className="car-info__price-list-days">3-7</div>
              <div className="car-info__price-list-price">100€</div>
            </li>
            <li className="car-info__price-list-item">
              <div className="car-info__price-list-days">8+</div>
              <div className="car-info__price-list-price">80€</div>
            </li>
            <li className="car-info__price-list-item">
              <div className="car-info__price-list-days">30+</div>
              <div className="car-info__price-list-price">50€</div>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 d-flex">
          <div className="mt-1">
            <img className="car-card__spec-icon" src={place} alt="places" />
            <span className="car-card__spec-name">{placesCount}</span>
          </div>

          {air == 1 && (
            <div className="mt-1 ml-1">
              <img className="car-card__spec-icon" src={wind} alt="konduk" />
            </div>
          )}

          <div className="mt-1">
            <img className="car-card__spec-icon" src={group} alt="price" />
            <span className="car-card__spec-name">{price.days}€</span>
          </div>
        </div>
        <div className="col-lg-6">
          <Link
            to={`${urls.reserv}/${slug}`}
            className="btn_main btn_slim mb-0"
          >
            Бронювати
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

export default CarCard;
