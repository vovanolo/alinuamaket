import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import { FormContext } from '../components/ContextProvider';
import * as urls from '../urls';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import '../styles/hero.css';

import slide01 from '../images/slider/01.png';
import slide02 from '../images/slider/02.png';
import slide03 from '../images/slider/03.png';

import circleSwitch from '../images/circle_switch.svg';

SwiperCore.use([Pagination, Autoplay]);

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

export default function Hero() {
  const [language, setLanguage] = useState('ua');
  const { t, i18n } = useTranslation();

  const [data, setData] = useContext(FormContext);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      locationFrom: '',
      locationTo: '',
      receiveDate: initialDateFormatted,
      receiveTime: initialTimeFormatted,
      returnDate: initialDateFormatted,
      returnTime: initialTimeFormatted,
    },
    onSubmit: handleFormSubmit,
  });

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
    console.log(data);
  }, [language]);

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

  function handleFormSubmit(values) {
    setData(values);
    history.push(urls.rent);
  }

  return (
    <>
      <Swiper
        className="slider__container_hero"
        loop
        autoplay={{
          delay: 5000,
        }}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <img
            className="img-responsive img-responsive_contain img-responsive_right"
            src={slide01}
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-responsive img-responsive_contain img-responsive_right"
            src={slide02}
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-responsive img-responsive_contain img-responsive_right"
            src={slide03}
            alt="Slide 3"
          />
        </SwiperSlide>
      </Swiper>

      <div className="container">
        <div className="hero-cta-box navbar-offset">
          <div className="row mb-4">
            <div className="col">
              <div className="hero-cta-box__title-box">
                <h1>
                  <span className="text_black hero-cta-box__title">
                    {t('Оренда авто в Україні')}
                  </span>
                  <span className="item-1 text_red hero-cta-box__subtitle">
                    {t('Львів')}
                  </span>
                  <span className="item-2 text_red hero-cta-box__subtitle">
                    {t('Харків')}
                  </span>
                  <span className="item-3 text_red hero-cta-box__subtitle">
                    {t('Івано-Франківськ')}
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-7">
              <form onSubmit={formik.handleSubmit} id="heroReservForm">
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
                        <p className="switch__title text_grey">
                          {t('Отримання')}
                        </p>
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
                          {t('дата та час')}
                        </sub>
                      </div>

                      <div className="switch__box">
                        <p className="switch__title text_grey">
                          {t('Повернення')}
                        </p>
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
                          {t('дата та час')}
                        </sub>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col">
              <button type="submit" form="heroReservForm" className="btn_main">
                {t('Бронювати')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
