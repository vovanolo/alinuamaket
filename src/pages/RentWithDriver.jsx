import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import $ from 'jquery';

import '../styles/rent_with_driver.css';
import { fetchTransferPosts } from '../utils/fetchTransferPosts';
import { fetchTransferOrder } from '../utils/fetchTransferOrder';

import transf from '../images/rent_with_driver/id_card.svg';
import calendar from '../images/rent_with_driver/calendar.svg';
import star from '../images/rent_with_driver/star.svg';

import LoyaltyCard from '../components/LoyaltyCard';
import slide01 from '../images/slider/01.png';
import { transferInfo } from '../urls';

export default function RentWithDriver({ data }) {
  const [language, setLanguage] = useState('ua');
  const [transferPosts, setTransferPosts] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
  }, [language]);

  useEffect(() => {
    fetchTransferPosts(localStorage.getItem('lang'))
      .then((res) => setTransferPosts(res))
      .catch((err) => console.dir(err));
  }, []);

  function changeLanguage(newLanguage) {
    const newLang = newLanguage;
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }

  function handleFormSubmit(values) {
    console.log(values);
    fetchTransferOrder(values).then((res) => {
      console.log('Server Response', res);
      $('#transferModal').modal('show');
    });
  }

  const loyaltyCardsData = [
    {
      icon: transf,
      iconAlt: 'transfer',
      description: t('Виберіть трансфер або погодинну поїздку'),
    },
    {
      icon: calendar,
      iconAlt: 'calendar',
      description: t('Виберіть дату та час'),
    },
    {
      icon: star,
      iconAlt: 'star',
      description: t('Виберіть клас автомобіля'),
    },
  ];
  const validationSchema = Yup.object().shape({
    fromLocation: Yup.string()
      .min(2, t('Location must at least 2 characters long'))
      .required(t('Location From is a required field')),
    toLocation: Yup.string().min(2).required(),
    date: Yup.string().min(2).required(),
    time: Yup.string().min(2).required(),
    name: Yup.string().min(2).required(),
    phone: Yup.string().min(10).required(),
    email: Yup.string().email().required(),
    comment: Yup.string().min(5),
  });

  return (
    <div>
      <div className="rent_with_driver">
        <div className="transfer-offset">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-12">
                <h2 className="text-white text-md-left text-lg-left text-center mb-5">
                  {t('Оренда машини з водієм')}
                </h2>

                {loyaltyCardsData.map(
                  ({ icon, iconAlt, description }, index) => (
                    <div
                      key={index}
                      className="row align-items-center mb-4 icon_transfer-dis"
                    >
                      <div className="col-lg-3 col-12 mb-lg-0 mb-3  text-lg-left text-center ">
                        <img
                          className="loyalty-card__icon"
                          src={icon}
                          alt={iconAlt}
                        />
                      </div>
                      <div className="col-lg-9 col-12 text-lg-left text-center">
                        <p className="loyalty-card__description text-white">
                          {description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="col-lg-7 col-12">
                <Formik
                  initialValues={{
                    fromLocation: '',
                    toLocation: '',
                    date: '',
                    time: '',
                    name: '',
                    email: '',
                    phone: '',
                    comment: '',
                  }}
                  onSubmit={handleFormSubmit}
                  validationSchema={validationSchema}
                >
                  {(props) => (
                    <form onSubmit={props.handleSubmit} className="rent_form">
                      <button type="submit submit_color-red">
                        {t('Бронювати')}
                      </button>
                      <div className="row">
                        <div className="col-12">
                          {/* <div className="input_radio_transfer">
                            <input
                              id="rent_with_driver_radio"
                              className="visually-hidden"
                              name="transfer"
                              type="radio"
                              defaultChecked
                            />
                            <label
                              className="transf_border mr-3 text-white"
                              htmlFor="rent_with_driver_radio"
                            >
                              {t('Трансфер')}
                            </label>
                          </div> */}
                          {/* <div className="input_radio_transfer">
                            <input
                              id="rent_with_driver_radio_hours"
                              className="visually-hidden"
                              name="transfer"
                              type="radio"
                            />
                            <label
                              className="transf_border text-white"
                              htmlFor="rent_with_driver_radio_hours"
                            >
                              {t('Погодинно')}
                            </label>
                          </div> */}
                        </div>
                      </div>
                      <div className="row mt-3">
                        {/* transf_date */}
                        <div className="col-12">
                          <div className="transf_date">
                            <div className="row">
                              <div className="col-lg-5 mb-md-3 mb-lg-0">
                                <label className="transf-date__input">
                                  <p>{t('Дата')}</p>
                                  <input
                                    name="date"
                                    type="date"
                                    className="transf_time_input rent_with_driver__input"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.date}
                                  />
                                  {props.errors.date && (
                                    <span className="reserv__input-error">
                                      {props.errors.date}
                                    </span>
                                  )}
                                </label>
                              </div>
                              <div className="col-lg-5 offset-lg-2 transf_date-input">
                                <label className="transf-date__input">
                                  <p>{t('Час')}</p>
                                  <input
                                    name="time"
                                    type="time"
                                    className="transf_time_input rent_with_driver__input"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.time}
                                  />
                                  {props.errors.time && (
                                    <span className="reserv__input-error">
                                      {props.errors.time}
                                    </span>
                                  )}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3  d-flex justify-content-between">
                        <div className="col-md-6">
                          <div className="transf-location d-flex flex-column justify-content-between">
                            <p>{t('від')}</p>
                            <input
                              name="fromLocation"
                              placeholder={t('Вкажіть локацію')}
                              className="transf_input rent_with_driver__input"
                              type="text"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.fromLocation}
                            />
                            <p>{t('місто, область, країна')}</p>
                            {props.errors.fromLocation && (
                              <span className="reserv__input-error">
                                {props.errors.fromLocation}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6 mt-lg-0 mt-md-0 mt-sm-3 mt-3 d-flex flex-column justify-content-between">
                          <div className="transf-location d-flex flex-column justify-content-between">
                            <p>{t('до')}</p>
                            <input
                              name="toLocation"
                              placeholder={t('Вкажіть локацію')}
                              className="transf_input rent_with_driver__input"
                              type="text"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.toLocation}
                            />
                            <p>{t('місто, область, країна')}</p>
                            {props.errors.toLocation && (
                              <span className="reserv__input-error">
                                {props.errors.toLocation}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="form-row mb-3 mt-3">
                            <div className="col">
                              <input
                                required
                                name="name"
                                className="input rent_with_driver__input"
                                type="text"
                                placeholder={t('Вкажіть імя')}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.name}
                              />
                              {props.errors.name && (
                                <span className="reserv__input-error">
                                  {props.errors.name}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="form-row mb-3">
                            <div className="col">
                              <input
                                required
                                name="phone"
                                className="input rent_with_driver__input"
                                type="tel"
                                placeholder={t('Вкажіть телефон')}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.phone}
                              />
                              {props.errors.phone && (
                                <span className="reserv__input-error">
                                  {props.errors.phone}
                                </span>
                              )}
                            </div>
                            <div className="col">
                              <input
                                required
                                name="email"
                                className="input rent_with_driver__input"
                                type="email"
                                placeholder={t('Вкажіть email')}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.email}
                              />
                              {props.errors.email && (
                                <span className="reserv__input-error">
                                  {props.errors.email}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="col">
                              <textarea
                                as="textarea"
                                type="textarea"
                                name="comment"
                                className="input rent_with_driver__input"
                                placeholder={t('Коментар')}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.comment}
                              />
                              {props.errors.comment && (
                                <span className="reserv__input-error">
                                  {props.errors.comment}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          {transferPosts.map(
            ({ slug, featured_images, title, excerpt }, index) => {
              if (index % 2 === 0) {
                return (
                  <div key={slug} className="row mb-5 mt-5">
                    <div className="col-md-6">
                      <img
                        className="img img-responsive"
                        src={featured_images[0].path}
                        alt={title}
                      />
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-1">{title}</h3>
                      <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
                      <div className="row mt-3">
                        <div className="col-lg-6">
                          <Link
                            to={`${transferInfo}/${slug}`}
                            className="btn_main btn_slim"
                          >
                            {t('Get a price')}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={slug} className="row mb-5 mt-5">
                    <div className="col-md-6 order-md-1 order-2">
                      <h3 className="mb-1">{title}</h3>
                      <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
                      <div className="row mt-3">
                        <div className="col-lg-6">
                          <Link
                            to={`${transferInfo}/${slug}`}
                            className="btn_main btn_slim"
                          >
                            {t('Get a price')}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 order-md-2 order-1">
                      <img
                        className="img img-responsive"
                        src={featured_images[0].path}
                        alt={title}
                      />
                    </div>
                  </div>
                );
              }
            }
          )}
        </div>
      </div>
      <div
        className="modal fade"
        id="transferModal"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {/* Modal title */}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center">
              <h3>{t('Дякуємо за заявку')}</h3>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                {t('Закрити')}
              </button>
              {/* <button type="button" class="btn btn-primary">
                Understood
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
