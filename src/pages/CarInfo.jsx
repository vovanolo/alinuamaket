import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/breadcumbs.css';
import '../styles/car_info.css';

import place from '../images/Places.svg';
import wind from '../images/wind.svg';
import group from '../images/Group 388.svg';
import car1 from '../images/car_info/car1.png';
import car2 from '../images/car_info/car2.jpg';
import car3 from '../images/car_info/car3.jpg';

import CarSpec from '../components/CarSpec';
import CarCard from '../components/CarCard';

export default function CarInfo() {
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

  const carSpecs = [
    {
      title: t('Загальні'),
      specs: [
        {
          name: t('Регіон походження бренду'),
          value: t('Європа')
        },
        {
          name: t('Класс'),
          value: t('Е класс(бізнес)')
        },
        {
          name: t('Тип кузову'),
          value: t('Седан')
        },
        {
          name: t('Паливо'),
          value: t('Гібрид')
        }
      ]
    }
  ];

  return (
    <div className="container">

      <div className="row navbar-offset">
        <div className="col">
          <ul className="breadcumbs">
            <li className="breadcumbs__item">{t('Прокат автомобілів')}</li>
            <li className="breadcumbs__item">BMW S SERIES SEDAN</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-3">
          <div className="row">
            <div className="col">
              <h3 className="text_black">{t('Загальні технічні характеристики')}</h3>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              {carSpecs.map(({ title, specs }, index) => (
                <CarSpec key={index} title={title} specs={specs} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="d-flex flex-column justify-content-between h-100">
            <div className="row">
              <div className="col">
                <img src={car1} alt="car1" />
              </div>
            </div>

            <div className="row row-cols-md-3">
              <div className="col">
                <img className="img-responsive img-responsive_cover" src={car1} alt="car2" />
              </div>
              <div className="col">
                <img className="img-responsive img-responsive_cover" src={car1} alt="car3" />
              </div>
              <div className="col">
                <img className="img-responsive img-responsive_cover" src={car1} alt="car4" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          <h3 className="card-title">BMW S SERIES SEDAN (G30)</h3>
          <h4>530E IPERFORMANCE</h4>
          <h4 className="card-text">2018</h4>
          <ul className="car-info__info-list">
            <li className="car-info__info-item">
              <img src={place} alt="places" />
              <span className="car-info__info-item-title">4 місця</span>
            </li>

            <li className="car-info__info-item">
              <img src={wind} alt="konduk" />
              <span className="car-info__info-item-title">Кондиціонер</span>
            </li>

            <li className="d-flex justify-content-between car-info__info-item car-info__info-item_price">
              <span>
                <img src={group} alt="price" />
                <span className="car-info__info-item-title">1000€</span>
              </span>

              <span>
                <span className="text_black">{t('від')} </span>
                <span className="text_grey">120€</span>
              </span>
            </li>
          </ul>
          
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
          
          <button type="button" className="btn_main">{t('Орендувати')}</button>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col">
          <h3 className="text_black">{t('Рекомендації')}</h3>
        </div>
      </div>

      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 mt-3">
        <CarCard
          name="Volkswagen Tiguan"
          year="2018"
          placesCount="7 місць"
          price="800"
          dayPrice="70"
          photo={car1}
        />
        <CarCard
          name="Volkswagen Tiguan"
          year="2018"
          placesCount="7 місць"
          price="800"
          dayPrice="70"
          photo={car2}
        />
        <CarCard
          name="Volkswagen Tiguan"
          year="2018"
          placesCount="7 місць"
          price="800"
          dayPrice="70"
          photo={car3}
        />
      </div>
    </div>
  );
}
