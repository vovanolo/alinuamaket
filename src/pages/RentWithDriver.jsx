import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Field, Form } from 'formik';

import '../styles/rent_with_driver.css';

import transf from '../images/rent_with_driver/id_card.svg';
import calendar from '../images/rent_with_driver/calendar.svg';
import star from '../images/rent_with_driver/star.svg';

import LoyaltyCard from '../components/LoyaltyCard';

export default function RentWithDriver({ data }) {
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

  return (
    <div className="rent_with_driver mt-6">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12">
            <h2 className="text_black mb-5">{t('Оренда машини з водієм')}</h2>

            {loyaltyCardsData.map(({ icon, iconAlt, description }, index) => (
              <LoyaltyCard
                key={index}
                icon={icon}
                iconAlt={iconAlt}
                description={description}
                margin={4}
              />
            ))}
          </div>
          <div className="col-lg-7 col-12">
            <Formik
              initialValues={{
                fromLocation: '',
                toLocation: '',
                date: '',
                time: '',
              }}
              onSubmit={handleFormSubmit}
            >
              <Form className="rent_form">
                <button type="submit submit_color-red">{t('Далі')}</button>
                <div className="row">
                  <div className="col-12">
                    <div className="input_radio_transfer">
                      <input
                        id="rent_with_driver_radio"
                        className="visually-hidden"
                        name="transfer"
                        type="radio"
                        defaultChecked
                      />
                      <label
                        className="transf_border mr-3"
                        htmlFor="rent_with_driver_radio"
                      >
                        {t('Трансфер')}
                      </label>
                    </div>
                    <div className="input_radio_transfer">
                      <input
                        id="rent_with_driver_radio_hours"
                        className="visually-hidden"
                        name="transfer"
                        type="radio"
                      />
                      <label
                        className="transf_border"
                        htmlFor="rent_with_driver_radio_hours"
                      >
                        {t('Погодинно')}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mt-3  d-flex justify-content-between">
                  <div className="col-md-6">
                    <div className="transf-location d-flex flex-column justify-content-between">
                      <p>{t('від')}</p>
                      <Field
                        name="fromLocationFrom"
                        placeholder={t('Вкажіть локацію')}
                        className="transf_input"
                        type="text"
                      />
                      <p>{t('місто, область, країна')}</p>
                    </div>
                  </div>
                  <div className="col-md-6 mt-lg-0 mt-md-0 mt-sm-3 mt-3 d-flex flex-column justify-content-between">
                    <div className="transf-location d-flex flex-column justify-content-between">
                      <p>{t('до')}</p>
                      <Field
                        name="fromLocationTo"
                        placeholder={t('Вкажіть локацію')}
                        className="transf_input"
                        type="text"
                      />
                      <p>{t('місто, область, країна')}</p>
                    </div>
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
                            <Field
                              name="date"
                              type="date"
                              className="transf_time_input"
                            />
                          </label>
                        </div>
                        <div className="col-lg-5 offset-lg-2 transf_date-input">
                          <label className="transf-date__input">
                            <p>{t('Час')}</p>
                            <Field
                              name="time"
                              type="time"
                              className="transf_time_input"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
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
