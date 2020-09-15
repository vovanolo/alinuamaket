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

const ExtrasType = {
  perDay: 'Доба',
  onetime: 'Одноразово',
};

const extrasValues = [
  {
    id: 1,
    price: 5,
    displayPrice: 5,
    type: ExtrasType.perDay,
    value: 'Зарядне/тримач для тел',
  },
  {
    id: 2,
    price: 10,
    displayPrice: 10,
    type: ExtrasType.onetime,
    value: 'Додатковий водій',
  },
];

const initialDateFormatted = `${new Date().getFullYear()}-${
  new Date().getMonth().toString().length < 2
    ? '0' + (new Date().getMonth() + 1).toString()
    : new Date().getMonth()
}-${
  new Date().getDate().toString().length < 2
    ? '0' + new Date().getDate()
    : new Date().getDate()
}`;

const initialTimeFormatted = `${new Date().getHours()}:${new Date().getMinutes()}`;

export default function Reserv({ sendData }) {
  const [language, setLanguage] = useState('ua');
  const [price, setPrice] = useState(120);
  const [allPrices, setAllPrices] = useState([]);
  const [rentDays, setRentDays] = useState(1);
  const [extras, setExtras] = useState([]);

  const { t, i18n } = useTranslation();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      locationFrom: '',
      locationTo: '',
      receiveDate: initialDateFormatted,
      receiveTime: initialTimeFormatted,
      returnDate: initialDateFormatted,
      returnTime: initialTimeFormatted,
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
    setAllPrices([120, 100, 80, 50]);
  }, []);

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
  }, [language]);

  useEffect(() => {
    // console.log(formik.values);

    const { receiveDate, returnDate } = formik.values;

    if (!(receiveDate && returnDate)) return;

    const newRentDays =
      new Date(returnDate).getDate() - new Date(receiveDate).getDate();

    handleExtrasPriceSet();

    setRentDays(newRentDays < 1 ? 1 : newRentDays);
  }, [formik.values]);

  useEffect(() => {
    handleExtrasPriceSet();
  }, [rentDays]);

  useEffect(() => {
    const extrasPrice = extras.reduce(
      (acc, extra) => acc + extra.displayPrice,
      0
    );
    if (allPrices.length > 0) {
      if (rentDays >= 1 && rentDays <= 2) {
        setPrice(allPrices[0] * rentDays + extrasPrice);
      } else if (rentDays >= 3 && rentDays <= 7) {
        setPrice(allPrices[1] * rentDays + extrasPrice);
      } else if (rentDays >= 8 && rentDays <= 29) {
        setPrice(allPrices[2] * rentDays + extrasPrice);
      } else if (rentDays >= 30) {
        setPrice(allPrices[3] * rentDays + extrasPrice);
      }
    }
  }, [extras]);

  function changeLanguage(newLanguage) {
    const newLang = newLanguage;
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }

  function handleLocationSwap() {
    const locationFrom = formik.values.locationFrom;
    const locationTo = formik.values.locationTo;

    formik.setValues({
      ...formik.values,
      locationFrom: locationTo,
      locationTo: locationFrom,
    });
  }

  function handleDateSwap() {
    const receiveDate = formik.values.receiveDate;
    const returnDate = formik.values.returnDate;
    const receiveTime = formik.values.receiveTime;
    const returnTime = formik.values.returnTime;

    formik.setValues({
      ...formik.values,
      receiveDate: returnDate,
      returnDate: receiveDate,
      receiveTime: returnTime,
      returnTime: receiveTime,
    });
  }

  function handleExtrasPriceSet() {
    const extrasPrices = formik.values.extras.reduce((acc, value) => {
      let newValues = [];

      extrasValues.forEach((value1) => {
        if (value1.id == value) {
          const newValue = {
            ...value1,
            displayPrice:
              value1.type === ExtrasType.perDay
                ? value1.price * rentDays
                : value1.price,
          };
          newValues = [...acc, newValue];
        }
      });

      return newValues;
    }, []);

    setExtras(extrasPrices);
  }

  function handleFormSubmit(values) {
    console.log({ ...values, extras: extras, price });
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
                  <button
                    type="button"
                    className="switch__btn"
                    onClick={handleLocationSwap}
                  >
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
                  <button
                    type="button"
                    className="switch__btn"
                    onClick={handleDateSwap}
                  >
                    <img src={circleSwitch} alt="switch icon" />
                  </button>

                  <div className="switch__box">
                    <p className="switch__title text_grey">{t('Отримання')}</p>
                    <div className="switch__input-container">
                      <input
                        name="receiveDate"
                        type="date"
                        min={initialDateFormatted}
                        className="switch__input"
                        onChange={formik.handleChange}
                        value={formik.values.receiveDate}
                      />
                      <input
                        name="receiveTime"
                        type="time"
                        min={initialTimeFormatted}
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
                        min={initialDateFormatted}
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
                  {extrasValues.map(({ id, price, type, value }) => (
                    <Option
                      key={id}
                      id={id}
                      label={t(`${value} ${price}‎€ / ${type}`)}
                      name="extras"
                      value={id}
                      onChange={formik.handleChange}
                    />
                  ))}
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
                  {extras.map(
                    ({ id, value, type, price: extrasPrice, displayPrice }) => (
                      <li key={id} className="reserv__price-list-item">
                        <span className="reserv__price-title">
                          {t(`${value} ${extrasPrice} / ${type}`)}
                        </span>
                        <span className="text_grey reserv__price-price">
                          +{displayPrice}€
                        </span>
                      </li>
                    )
                  )}
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
