import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Field, Form } from 'formik';

import '../styles/rent_with_driver.css';

import transf from '../images/rent_with_driver/id_card.svg';
import calendar from '../images/rent_with_driver/calendar.svg';
import star from '../images/rent_with_driver/star.svg';

import LoyaltyCard from '../components/LoyaltyCard';

export default function RentWithDriver() {
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
      description: 'Виберіть трансфер або погодинну поїздку'
    },
    {
      icon: calendar,
      iconAlt: 'calendar',
      description: 'Виберіть дату та час'
    },
    {
      icon: star,
      iconAlt: 'star',
      description: 'Виберіть клас автомобіля'
    },
  ];

  return (
    <div className="rent_with_driver mt-6">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12">
            <h2 className="text_black mb-5">Оренда машини з водієм</h2>

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
                date: new Date(),
                time: new Date().getTime()
              }}
              onSubmit={handleFormSubmit}
            >
              <Form className="rent_form">
                <button type="submit">Далі</button>
                <div className="row">
                  <div className="col-3 transf_border d-flex justify-content-center align-items-center">
                    <p>Трансфер</p>
                  </div>
                  <div className="col-4 d-flex justify-content-center align-items-center">
                    <p>Погодинно</p>
                  </div>
                </div>
                <div className="row mt-3 d-flex justify-content-between">
                  <div className="col-md-5 transf-location d-flex flex-column justify-content-between">
                    <p>від</p>
                    <Field name="fromLocation" placeholder="Вкажіть Локацію" className="transf_input" type="text" />
                    <p>місто,область,країна</p>
                  </div>
                  <div className="col-md-5 transf-location d-flex flex-column justify-content-between">
                    <p>від</p>
                    <Field name="toLocation" placeholder="Вкажіть Локацію" className="transf_input" type="text" />
                    <p>місто,область,країна</p>
                  </div>
                </div>
                <div className="row mt-3 transf_date">
                  <div className="col-lg-5 mb-md-3 mb-lg-0">
                    <label className="transf-date__input">
                      <p>Дата</p>
                      <Field name="date" type="date" className="transf_time_input" />
                    </label>
                  </div>
                  <div className="col-lg-5 offset-lg-2 transf_date-input">
                    <label className="transf-date__input">
                      <p>Час</p>
                      <Field name="time" type="time" className="transf_time_input" />
                    </label>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}
