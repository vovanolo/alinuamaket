import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import * as urls from '../urls';

import '../styles/loyalty.css';

import percent from '../images/loyalty/5_percent.svg';
import chat from '../images/loyalty/chat.svg';
import people from '../images/loyalty/people.svg';
import badge from '../images/loyalty/badge.svg';
import sleep from '../images/loyalty/sleep.svg';
import discount from '../images/loyalty/max_discount.svg';

import car1 from '../images/loyalty/car_1.png';
import car2 from '../images/loyalty/car_2.png';

import LoyaltyCard from '../components/LoyaltyCard';

export default function LoyaltyProgram() {
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

  const loyaltyCardsData1 = [
    {
      icon: percent,
      iconAlt: '5% discount',
      description: t(
        'Орендуй на довгий термін, та отримуй за кожні 10 днів прокату по 5% знижки на наступну оренду ( *знижка накопичувальна)'
      ),
    },
    {
      icon: chat,
      iconAlt: 'Leave a review',
      description: t(
        'Залиш відгук з фотографією про компанію ALIN на нашій сторінці в Instagram або на Google Maps та отримай додатково 5% знижки на наступну оренду'
      ),
    },
    {
      icon: people,
      iconAlt: 'Additional discount for bringing friend',
      description: t(
        'Приведи друга та отримай додаткову знижку 5% для себе та 5% для товариша'
      ),
    },
  ];

  const loyaltyCardsData2 = [
    {
      icon: badge,
      iconAlt: 'Special conditions for regular customers',
      description: t(
        'Для постійних клієнтів компанї ALIN діють спеціальні умови лояльності по франшизі.'
      ),
    },
    {
      icon: sleep,
      iconAlt: 'Hotel discount',
      description: t(
        'При оренді автомобіля, клієнти компанї отримають знижки на проживання в ряді готелей (перелік готелів-партнерів уточнюйте в менеджера)'
      ),
    },
    {
      icon: discount,
      iconAlt: 'Max discount - 30%',
      description: t('Максимально сумарна знижка 30%'),
    },
  ];

  return (
    <div className="navbar-offset">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6 col">
            <div className="row">
              <div className="col">
                <h2 className="text_black loyalty__title">
                  {t('Програма лояльності')}
                </h2>
              </div>
            </div>

            <div className="loyalty__car loyalty__car_left">
              <img
                className="img-responsive img-responsive_contain"
                src={car1}
                alt="Car"
              />
            </div>

            {loyaltyCardsData1.map(({ icon, iconAlt, description }, index) => (
              <LoyaltyCard
                key={index}
                icon={icon}
                iconAlt={iconAlt}
                description={description}
                margin={5}
              />
            ))}
          </div>
        </div>

        <div className="row loyalty__row">
          <div className="col-lg-6 col">
            <div className="loyalty__car loyalty__car_right">
              <img
                className="img-responsive img-responsive_contain"
                src={car2}
                alt="Car"
              />
            </div>

            {loyaltyCardsData2.map(({ icon, iconAlt, description }, index) => (
              <LoyaltyCard
                key={index}
                icon={icon}
                iconAlt={iconAlt}
                description={description}
                margin={5}
              />
            ))}
          </div>
        </div>

        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5">
            <Link to={urls.rent} className="btn_main">
              {t('Орендувати')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
