import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Field, Form, useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

import { rentWithDriver } from '../urls';

import '../styles/reserv.css';
import '../styles/switch.css';

import circleSwitch from '../images/circle_switch.svg';
import car from '../images/slider/01_Car.png';

import Option from '../components/Option';

const extrasValues = {
  Charger: 'Зарядне/тримач для тел 5€ /Доба',
  BabyChair: 'Дитяче крісло 5€ /Доба',
  AdditionalDriver: 'Додатковий водій 10€ /Одноразово',
  GPS: 'GPS навігація 5€ /Доба',
};

export default function Reserv({ sendData }) {
  const [language, setLanguage] = useState('ua');
  const [extras, setExtras] = useState([]);
  const [price, setPrice] = useState(120);

  const { t, i18n } = useTranslation();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      locationFrom: '',
      locationTo: '',
      receiveDate: '',
      receiveTime: '',
      returnDate: '',
      returnTime: '',
      extras: [],
      name: '',
      phone: '',
      email: '',
      comment: '',
      agreeWithTerms: false,
    },
    onSubmit: handleFormSubmit,
  });

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
  }, [language]);

  useEffect(() => {
    console.log('formik.values', formik.values);
  }, [formik.values]);

  function changeLanguage(newLanguage) {
    const newLang = newLanguage;
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }

  function handleFormSubmit(values) {
    console.log('values', values);
    // sendData(values);
    // history.push(rentWithDriver);
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text_black reserv__title">
              {t('Бронювання автомобіля')}
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col">
                <h3 className="text_black reserv__section-title">
                  {t('Налаштування бронювання')}
                </h3>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="switch">
                  <button type="button" className="switch__btn">
                    <img src={circleSwitch} alt="switch icon" />
                  </button>

                  <div className="switch__box">
                    <p className="switch__title text_grey">{t('від')}</p>
                    <input
                      name="locationFrom"
                      type="text"
                      className="switch__input"
                      placeholder={t('Вкажіть локацію')}
                      onChange={formik.handleChange}
                      value={formik.values.locationFrom}
                    />
                    <sub className="switch__sub-title text_grey">
                      {t('місто, область, країна')}
                    </sub>
                  </div>

                  <div className="switch__box">
                    <p className="switch__title text_grey">{t('до')}</p>
                    <input
                      name="locationTo"
                      type="text"
                      className="switch__input"
                      placeholder={t('Вкажіть локацію')}
                      onChange={formik.handleChange}
                      value={formik.values.locationTo}
                    />
                    <sub className="switch__sub-title text_grey">
                      {t('місто, область, країна')}
                    </sub>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="switch">
                  <button type="button" className="switch__btn">
                    <img src={circleSwitch} alt="switch icon" />
                  </button>

                  <div className="switch__box">
                    <p className="switch__title text_grey">{t('Отримання')}</p>
                    <div className="switch__input-container">
                      <input
                        name="receiveDate"
                        type="date"
                        className="switch__input"
                        onChange={formik.handleChange}
                        value={formik.values.receiveDate}
                      />
                      <input
                        name="receiveTime"
                        type="time"
                        className="switch__input"
                        onChange={formik.handleChange}
                        value={formik.values.receiveTime}
                      />
                    </div>
                    <sub className="switch__sub-title text_grey">
                      {t('місто, область, країна')}
                    </sub>
                  </div>

                  <div className="switch__box">
                    <p className="switch__title text_grey">{t('Повернення')}</p>
                    <div className="switch__input-container">
                      <input
                        name="returnDate"
                        type="date"
                        className="switch__input"
                        onChange={formik.handleChange}
                        value={formik.values.returnDate}
                      />
                      <input
                        name="returnTime"
                        type="time"
                        className="switch__input"
                        onChange={formik.handleChange}
                        value={formik.values.returnTime}
                      />
                    </div>
                    <sub className="switch__sub-title text_grey">
                      {t('місто, область, країна')}
                    </sub>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h3 className="text_black reserv__section-title">
                  {t('Додаткові опції')}
                </h3>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="row row-cols-md-2 row-cols-1">
                  <Option
                    name="extras"
                    value={extrasValues.Charger}
                    id={extrasValues.Charger}
                    label={t(extrasValues.Charger)}
                    onChange={formik.handleChange}
                  />
                  <Option
                    name="extras"
                    value={extrasValues.BabyChair}
                    id={extrasValues.BabyChair}
                    label={t(extrasValues.BabyChair)}
                    onChange={formik.handleChange}
                  />
                  <Option
                    name="extras"
                    value={extrasValues.AdditionalDriver}
                    id={extrasValues.AdditionalDriver}
                    label={t(extrasValues.AdditionalDriver)}
                    onChange={formik.handleChange}
                  />
                  <Option
                    name="extras"
                    value={extrasValues.GPS}
                    id={extrasValues.GPS}
                    label={t(extrasValues.GPS)}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h3 className="text_black reserv__section-title">
                  {t('Особисті дані')}
                </h3>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="form-row mb-3">
                  <div className="col">
                    <input
                      name="name"
                      className="input"
                      type="text"
                      placeholder={t("Ваше ім'я")}
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                  </div>
                </div>

                <div className="form-row mb-3">
                  <div className="col">
                    <input
                      name="phone"
                      className="input"
                      type="tel"
                      placeholder={t('Телефон')}
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                  </div>
                  <div className="col">
                    <input
                      name="email"
                      className="input"
                      type="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                </div>

                <div className="form-row mb-3">
                  <div className="col">
                    <input
                      name="comment"
                      as="textarea"
                      className="input"
                      placeholder={t('Коментар')}
                      onChange={formik.handleChange}
                      value={formik.values.comment}
                    />
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
                <img
                  className="img-responsive img-responsive_contain reserv__car-img"
                  src={car}
                  alt="BMW S SERIES SEDAN (G30)"
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h4 className="text_black">
                  {t('В вартість оренди включено')}:
                </h4>
                <ul className="reserv__price-list">
                  {extras.map((extra, index) => (
                    <li key={index} className="reserv__price-list-item">
                      <span className="reserv__price-title">{t(extra)}</span>
                      <span className="text_grey reserv__price-price">
                        +15$
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="reserv__final-price-box">
                  <p className="reserv__final-price-title">
                    {t('Ціна оренди')}:
                  </p>
                  <p className="reserv__final-price">{price}€</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label className="reserv__agreement-label">
                  <span className="reserv__agreement-text">
                    {t('Я погоджуюсь з умовами прокату')}
                  </span>
                  <input
                    name="agreeWithTerms"
                    className="reserv__agreement-checkbox"
                    type="checkbox"
                    onChange={formik.handleChange}
                    checked={formik.values.agreeWithTerms}
                  />
                </label>
              </div>
            </div>

            <div className="row">
              <div className="col-md-10">
                <button
                  disabled={!formik.values.agreeWithTerms}
                  type="submit"
                  className="btn_main"
                >
                  {t('Орендувати')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
