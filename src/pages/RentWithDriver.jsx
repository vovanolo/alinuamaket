import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LoyaltyCard from '../components/LoyaltyCard';

import '../styles/rent_with_driver.css';
import '../styles/loyalty.css';

import transf from '../images/transf.png';
import calendar from '../images/calendar.png';
import star from '../images/start.png';



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
                    <div className="col-md-5 col">
                        <h2>Оренда машини з водієм</h2>
                        {loyaltyCardsData.map(({ icon, iconAlt, description }) => (
                            <LoyaltyCard
                            icon={icon}
                            iconAlt={iconAlt}
                            description={description}
                            />
                        ))}
                    </div>
                    <div className="col-md-7 rent_form">
                        <button>Далі</button>
                        <div className="row">
                            <div className="col-md-3 transf_border d-flex justify-content-center align-items-center">
                                <p>Трансфер</p>
                            </div>
                            <div className="col-md-4 d-flex justify-content-center align-items-center">
                                <p>Погодинно</p>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-between">
                            <div className="col-5 transf-location">
                                <p>від</p>
                                <input value="Вкажіть Локацію" className="transf_input" type="text"/>
                                <p>місто,область,країна</p>
                            </div>
                            <div className="col-5 transf-location">
                                <p>від</p>
                                <input value="Вкажіть Локацію" className="transf_input" type="text"/>
                                <p>місто,область,країна</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 transf_date">
                                <div className="row d-flex justify-content-between">
                                    <div className="col-5">
                                        <p>Дата</p>
                                        <input type="date"></input>
                                    </div>
                                    <div className="col-6">
                                        <p>Час</p>
                                        <input type="time"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
