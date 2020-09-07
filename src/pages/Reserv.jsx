import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Field, Form } from 'formik';
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

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
  }, [language]);

  function changeLanguage(newLanguage) {
    const newLang = newLanguage;
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }

  function handleFormSubmit(values) {
    sendData(values);
    history.push(rentWithDriver);
  }

  function handleExtrasCheck(value) {
    setExtras(value);
  }

  return (
    <Formik
      initialValues={{
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
      }}
      onSubmit={handleFormSubmit}
    >
      <Form>
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
                    <button className="switch__btn">
                      <img src={circleSwitch} alt="switch icon" />
                    </button>

                    <div className="switch__box">
                      <p className="switch__title text_grey">{t('від')}</p>
                      <Field
                        name="locationFrom"
                        type="text"
                        className="switch__input"
                        placeholder={t('Вкажіть локацію')}
                      />
                      <sub className="switch__sub-title text_grey">
                        {t('місто, область, країна')}
                      </sub>
                    </div>

                    <div className="switch__box">
                      <p className="switch__title text_grey">{t('до')}</p>
                      <Field
                        name="locationTo"
                        type="text"
                        className="switch__input"
                        placeholder={t('Вкажіть локацію')}
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
                    <button className="switch__btn">
                      <img src={circleSwitch} alt="switch icon" />
                    </button>

                    <div className="switch__box">
                      <p className="switch__title text_grey">
                        {t('Отримання')}
                      </p>
                      <div className="switch__input-container">
                        <Field
                          name="receiveDate"
                          type="date"
                          className="switch__input"
                        />
                        <Field
                          name="receiveTime"
                          type="time"
                          className="switch__input"
                        />
                      </div>
                      <sub className="switch__sub-title text_grey">
                        {t('місто, область, країна')}
                      </sub>
                    </div>

                    <div className="switch__box">
                      <p className="switch__title text_grey">
                        {t('Повернення')}
                      </p>
                      <div className="switch__input-container">
                        <Field
                          name="returnDate"
                          type="date"
                          className="switch__input"
                        />
                        <Field
                          name="returnTime"
                          type="time"
                          className="switch__input"
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
                      onCheck={handleExtrasCheck}
                      name="extras"
                      value={extrasValues.Charger}
                      id="extras1"
                      text={t(extrasValues.Charger)}
                    />
                    <Option
                      onCheck={handleExtrasCheck}
                      name="extras"
                      value={extrasValues.BabyChair}
                      id="extras2"
                      text={t(extrasValues.BabyChair)}
                    />
                    <Option
                      onCheck={handleExtrasCheck}
                      name="extras"
                      value={extrasValues.AdditionalDriver}
                      id="extras3"
                      text={t(extrasValues.AdditionalDriver)}
                    />
                    <Option
                      onCheck={handleExtrasCheck}
                      name="extras"
                      value={extrasValues.GPS}
                      id="extras4"
                      text={t(extrasValues.GPS)}
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
                      <Field
                        name="name"
                        className="input"
                        type="text"
                        placeholder={t("Ваше ім'я")}
                      />
                    </div>
                  </div>

                  <div className="form-row mb-3">
                    <div className="col">
                      <Field
                        name="phone"
                        className="input"
                        type="tel"
                        placeholder={t('Телефон')}
                      />
                    </div>
                    <div className="col">
                      <Field
                        name="email"
                        className="input"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div className="form-row mb-3">
                    <div className="col">
                      <Field
                        name="comment"
                        as="textarea"
                        className="input"
                        placeholder={t('Коментар')}
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
                    <li className="reserv__price-list-item">
                      <span className="reserv__price-title">
                        {t('Подача по місту')}
                      </span>
                      <span className="text_grey reserv__price-price">
                        +15$
                      </span>
                    </li>
                    <li className="reserv__price-list-item">
                      <span className="reserv__price-title">
                        {t('Повернення по місту')}
                      </span>
                      <span className="text_grey reserv__price-price">
                        +15$
                      </span>
                    </li>
                    <li className="reserv__price-list-item">
                      <span className="reserv__price-title">
                        {t('Повернення по місту')}
                      </span>
                      <span className="text_grey reserv__price-price">
                        +15$
                      </span>
                    </li>
                    <li className="reserv__price-list-item">
                      <span className="reserv__price-title">
                        {t('Wi-Fi роутер')}
                      </span>
                      <span className="text_grey reserv__price-price">
                        +15$
                      </span>
                    </li>
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
                    <Field
                      name="agreeWithTerms"
                      className="reserv__agreement-checkbox"
                      type="checkbox"
                    />
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="col-md-10">
                  <button type="submit" className="btn_main">
                    {t('Орендувати')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
