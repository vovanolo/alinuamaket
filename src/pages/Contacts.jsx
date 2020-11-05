import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik, Field, Form, MyText } from 'formik';

import '../styles/contacts.css';

import map from '../images/map-pin.svg';
import darkmail from '../images/darkmail.svg';
import phone from '../images/phone.svg';
import arrow from '../images/arrow4.png';

export default function Contacts() {
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

  function handleFormSubmit(values) {
    console.log(values);
    // fetchContactsInfo(requestData).then((res) =>
    //   console.log('Server Response', res)
    // );
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
                <p className="text_grey">{t('Львів')}</p>
                <div className="mt-3">
                  <img src={map} alt="" />
                  <span className="ml-2">вул. Любінська 196</span>
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
                <p className="text_grey">{t('Київ')}</p>
                <div className="mt-3">
                  <img src={map} alt="" />
                  <span className="ml-2">Аеропорт Бориспіль</span>
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
                <p className="text_grey">{t('Івано-Франківськ')}</p>
                <div className="mt-3">
                  <img src={map} alt="" />
                  <span className="ml-2">вул. Є. Коновальця 264А</span>
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
                <p className="text_grey">{t('Харків')}</p>
                <div className="mt-3">
                  <img src={map} alt="" />
                  <span className="ml-2">вул. Академіка Павлова 20Б</span>
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
              title="Contacts map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1296.5608658575609!2d23.959709706541158!3d49.81490518871833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae75d4ae39b99%3A0xaf9110949f3614b6!2zQWxpbiAtINCe0YDQtdC90LTQsCDQsNCy0YLQviDRgtCwINC_0LDRgdCw0LbQuNGA0YHRjNC60ZYg0L_QtdGA0LXQstC10LfQtdC90L3Rjw!5e0!3m2!1sru!2sua!4v1598553528433!5m2!1sru!2sua"
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
                className="img-responsive"
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
              onSubmit={handleFormSubmit}
            >
              <Form>
                <h3>{t("Зв'язатись з нами")}</h3>
                <Field
                  type="text"
                  name="name"
                  placeholder={t('Вкажіть імя')}
                  className="input mt-2"
                />
                <Field
                  type="text"
                  name="email"
                  placeholder={t('Вкажіть email')}
                  className="input mt-2"
                />
                <Field
                  as="textarea"
                  type="textarea"
                  name="comment"
                  className="input mt-2"
                  placeholder={t('Коментар')}
                />

                <div className="row mt-2">
                  <div className="col-lg-4">
                    <button type="submit" className="btn_main">
                      {t('Надіслати')}
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
