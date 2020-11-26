import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import * as Yup from 'yup';
import $ from 'jquery';

import '../styles/contacts.css';

import map from '../images/map-pin.svg';
import darkmail from '../images/darkmail.svg';
import phone from '../images/phone.svg';
import arrow from '../images/arrow4.png';
import { fetchContactsInfo } from '../utils/fetchContactsInfo';

export default function Contacts() {
  const [language, setLanguage] = useState('ua');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mapMarker, setMapMarker] = useState(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1296.5608658575609!2d23.959709706541158!3d49.81490518871833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae75d4ae39b99%3A0xaf9110949f3614b6!2zQWxpbiAtINCe0YDQtdC90LTQsCDQsNCy0YLQviDRgtCwINC_0LDRgdCw0LbQuNGA0YHRjNC60ZYg0L_QtdGA0LXQstC10LfQtdC90L3Rjw!5e0!3m2!1sru!2sua!4v1598553528433!5m2!1sru!2sua'
  );

  const { t, i18n } = useTranslation();

  const mapRef = useRef();

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    comment: Yup.string().min(5),
  });

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
  }, [language]);

  // useEffect(() => {
  //   setTimeout(scrollToMap, 100);
  // }, [mapMarker]);

  function changeLanguage(newLanguage) {
    const newLang = newLanguage;
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }

  // function scrollToMap() {
  //   $([document.documentElement, document.body]).animate(
  //     {
  //       scrollTop: mapRef.current.scrollHeight * 1.5,
  //     },
  //     500
  //   );
  // }

  function changeMapMarkerKyiw() {
    setMapMarker(
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10186.07653902497!2d30.8939274!3d50.338222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x690a2c5d49d870da!2z0JDRjdGA0L7Qv9C-0YDRgiDQmtC40LXQsiDQkdC-0YDQuNGB0L_QvtC70Yw!5e0!3m2!1sru!2sua!4v1606311079438!5m2!1sru!2sua'
    );
  }
  function changeMapMarkerLviv() {
    setMapMarker(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1296.5608658575609!2d23.959709706541158!3d49.81490518871833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae75d4ae39b99%3A0xaf9110949f3614b6!2zQWxpbiAtINCe0YDQtdC90LTQsCDQsNCy0YLQviDRgtCwINC_0LDRgdCw0LbQuNGA0YHRjNC60ZYg0L_QtdGA0LXQstC10LfQtdC90L3Rjw!5e0!3m2!1sru!2sua!4v1598553528433!5m2!1sru!2sua'
    );
  }
  function changeMapMarkerHarkiv() {
    setMapMarker(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.3518424867834!2d36.27720071571466!3d49.986012679414024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a09f0093f3b1%3A0x6354885e6fb9e8f8!2z0YPQuy4g0JDQutCw0LTQtdC80LjQutCwINCf0LDQstC70L7QstCwLCAyMCwg0KXQsNGA0YzQutC-0LIsINCl0LDRgNGM0LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDYxMDAw!5e0!3m2!1sru!2sua!4v1606312188190!5m2!1sru!2sua'
    );
  }
  function changeMapMarkerFranyk() {
    setMapMarker(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.4626435903488!2d24.708504115675435!3d48.88751957929036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c6a9c8cd4edf%3A0x432dbc2e31eac441!2z0LLRg9C70LjRhtGPINCE0LLQs9C10L3QsCDQmtC-0L3QvtCy0LDQu9GM0YbRjywgMjY00JAsINCG0LLQsNC90L4t0KTRgNCw0L3QutGW0LLRgdGM0LosINCG0LLQsNC90L4t0KTRgNCw0L3QutGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzYwMDA!5e0!3m2!1sru!2sua!4v1606312038538!5m2!1sru!2sua'
    );
  }

  function handleFormSubmit(values, { resetForm }) {
    setLoading(true);
    setError(null);

    fetchContactsInfo(values)
      .catch((err) => setError(err.toJSON()))
      .finally(() => {
        setLoading(false);
        $('#contactsModal').modal('show');
      });

    resetForm({
      name: '',
      email: '',
      comment: '',
    });
  }

  return (
    <div className="contacts mb-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>{t('Контакти')}</h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={changeMapMarkerLviv}
                  className="text_grey"
                >
                  {t('Львів')}
                </a>
                <div className="mt-3">
                  <img src={map} alt="" />
                  <span className="ml-2">{t('вул. Любінська 196')}</span>
                </div>
                <div className="mt-2">
                  <img src={darkmail} alt="" />
                  <span className="ml-2">alin.lviv@gmail.com</span>
                </div>
                <div className="mt-2">
                  <img src={phone} alt="" />
                  <span className="ml-2">+38 098 777 16 00</span>
                </div>
              </div>
              <div className="col-md-6">
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={changeMapMarkerKyiw}
                  className="text_grey"
                >
                  {t('Київ')}
                </a>
                <div className="mt-3">
                  <img src={map} alt="" />
                  <span className="ml-2">{t('Аеропорт Бориспіль')}</span>
                </div>
                <div className="mt-2">
                  <img src={darkmail} alt="" />
                  <span className="ml-2">alin.lviv@gmail.com</span>
                </div>
                <div className="mt-2">
                  <img src={phone} alt="" />
                  <span className="ml-2">+38 098 777 16 00</span>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={changeMapMarkerFranyk}
                  className="text_grey"
                >
                  {t('Івано-Франківськ')}
                </a>
                <div className="mt-3">
                  <img src={map} alt="" />
                  <span className="ml-2">{t('вул. Є. Коновальця 264А')}</span>
                </div>
                <div className="mt-2">
                  <img src={darkmail} alt="" />
                  <span className="ml-2">alin.lviv@gmail.com</span>
                </div>
                <div className="mt-2">
                  <img src={phone} alt="" />
                  <span className="ml-2">+38 098 777 16 00</span>
                </div>
              </div>
              <div className="col-md-6">
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={changeMapMarkerHarkiv}
                  className="text_grey"
                >
                  {t('Харків')}
                </a>
                <div className="mt-3">
                  <img src={map} alt="" />
                  <span className="ml-2">
                    {t('вул. Академіка Павлова 20Б')}
                  </span>
                </div>
                <div className="mt-2">
                  <img src={darkmail} alt="" />
                  <span className="ml-2">alin.lviv@gmail.com</span>
                </div>
                <div className="mt-2">
                  <img src={phone} alt="" />
                  <span className="ml-2">+38 098 777 16 00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              ref={mapRef}
              id="contactsMap"
              title="Contacts map"
              src={mapMarker}
              width={600}
              height={450}
              frameBorder={0}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 ">
            <h3 className="">{t('Є запитання?')}</h3>
            <p className="mt-4 ml-5">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
              quisque est a, morbi lectus at. Pellentesque eget aenean mattis
              ullamcorper laoreet et. At sem elit felis a egestas. Ullamcorper
              eget purus aenean vel convallis arcu, euismod. Semper a, ultrices
              non nulla. Turpis phasellus neque quis sit tristique. Non iaculis
              tellus suscipit mauris vitae. */}
              <img
                src={arrow}
                alt=""
                className="img-responsive contacts-image_disapear"
                style={{
                  maxWidth: '200px',
                  maxHeight: '200px',
                  marginLeft: '100px',
                }}
              />
            </p>
          </div>
          <div className="col-md-6 input input_size">
            <Formik
              initialValues={{
                name: '',
                email: '',
                comment: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <h3>{t("Зв'язатись з нами")}</h3>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder={t('Вкажіть імя')}
                    className="input mt-2"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                  />
                  {props.errors.name && (
                    <span className="reserv__input-error">
                      {props.errors.name}
                    </span>
                  )}
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder={t('Вкажіть email')}
                    className="input mt-2"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                  />
                  {props.errors.email && (
                    <span className="reserv__input-error">
                      {props.errors.email}
                    </span>
                  )}
                  <textarea
                    name="comment"
                    className="input mt-2"
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

                  <div className="row mt-2">
                    <div className="col-lg-4">
                      <button
                        type="submit"
                        className="btn_main"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm mr-1"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Loading...
                          </>
                        ) : (
                          t('Надіслати')
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="contactsModal"
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
              <h3>{error ? error.message : t('Дякуємо за заявку')}</h3>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                {t('Закрити')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
