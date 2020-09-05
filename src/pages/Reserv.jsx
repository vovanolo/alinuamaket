import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Field, Form } from 'formik';

import '../styles/reserv.css';

import car from '../images/slider/01_Car.png';

import SwitchLocation from '../components/SwitchLocation';
import SwitchTime from '../components/SwitchTime';
import Option from '../components/Option';
import { Link } from 'react-router-dom';

export default function Reserv() {
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
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="text_black reserv__title">{t('Бронювання автомобіля')}</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="row">
          <div className="col">
            <h3 className="text_black reserv__section-title">{t('Налаштування бронювання')}</h3>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <SwitchLocation />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <SwitchTime />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h3 className="text_black reserv__section-title">{t('Додаткові опції')}</h3>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="row row-cols-md-2 row-cols-1">
              <Option id={1} text={t('Зарядне/тримач для тел 5€ /Доба')} />
              <Option id={2} text={t('Дитяче крісло 5€ /Доба')} />
              <Option id={3} text={t('Додатковий водій 10€ /Одноразово')} />
              <Option id={4} text={t('GPS навігація 5€ /Доба')} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h3 className="text_black reserv__section-title">{t('Особисті дані')}</h3>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-row mb-3">
              <div className="col">
                <input className="input" type="text" placeholder={t('Ваше ім\'я')} />
              </div>
            </div>

            <div className="form-row mb-3">
              <div className="col">
                <input className="input" type="tel" placeholder={t('Телефон')} />
              </div>
              <div className="col">
                <input className="input" type="email" placeholder="Email" />
              </div>
            </div>

            <div className="form-row mb-3">
              <div className="col">
                <textarea className="input" placeholder={t('Коментар')} />
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <div className="col-md-4">
          <div className="row">
            <div className="col">
              <h3 className="text_black">BMW S SERIES SEDAN (G30)</h3>
              <h4 className="text_black">530E IPERFORMANCE</h4>
              <h4 className="text_black">2018</h4>
            </div>
          </div>

          <div className="row mt-3 mb-4">
            <div className="col">
              <img className="img-responsive img-responsive_contain reserv__car-img" src={car} alt="BMW S SERIES SEDAN (G30)" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h4 className="text_black">{t('В вартість оренди включено')}:</h4>
              <ul className="reserv__price-list">
                <li className="reserv__price-list-item">
                  <span className="reserv__price-title">{t('Подача по місту')}</span>
                  <span className="text_grey reserv__price-price">+15$</span>
                </li>
                <li className="reserv__price-list-item">
                  <span className="reserv__price-title">{t('Повернення по місту')}</span>
                  <span className="text_grey reserv__price-price">+15$</span>
                </li>
                <li className="reserv__price-list-item">
                  <span className="reserv__price-title">{t('Повернення по місту')}</span>
                  <span className="text_grey reserv__price-price">+15$</span>
                </li>
                <li className="reserv__price-list-item">
                  <span className="reserv__price-title">{t('Wi-Fi роутер')}</span>
                  <span className="text_grey reserv__price-price">+15$</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="reserv__final-price-box">
                <p className="reserv__final-price-title">{t('Ціна оренди')}:</p>
                <p className="reserv__final-price">120€</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className="reserv__agreement-label">
                <span className="reserv__agreement-text">{t('Я погоджуюсь з умовами прокату')}</span>
                <input className="reserv__agreement-checkbox" type="checkbox" />
              </label>
            </div>
          </div>

          <div className="row">
            <div className="col-md-10">
              <Link to="/rent_with_driver" className="btn_main">{t('Орендувати')}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
