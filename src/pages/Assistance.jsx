import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import '../styles/assistance.css';

import first from '../images/assistance/first.svg';
import second from '../images/assistance/second.svg';
import third from '../images/assistance/third.svg';
import fourth from '../images/assistance/fourth.svg';
import fifth from '../images/assistance/fifth.svg';
import sixth from '../images/assistance/sixth.svg';
import car from '../images/assistance/car.png';
import last from '../images/assistance/last.png';

export default function Assistance() {
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
  const servicesData = [
    {
      icon: first,
      iconAlt: 'Запис авто',
      description: t('Запис авто на ремонт чи проведення техобслуговування'),
    },
    {
      icon: fourth,
      iconAlt: 'Підбір автозапчастин',
      description: t(
        'Підбір автозапчастин відповідно до Ваших побажань (б/в, нові)'
      ),
    },
    {
      icon: second,
      iconAlt: 'Страхування авто',
      description: t('Страхування авто'),
    },
    {
      icon: fifth,
      iconAlt: 'Оформлення полісу',
      description: t('Оформлення полісу цивільної відповідальності'),
    },
    {
      icon: third,
      iconAlt: 'Замовлення евакуатора',
      description: t('Замовлення евакуатора'),
    },
    {
      icon: sixth,
      iconAlt: 'Продаж автомобіля',
      description: t('Продаж автомобіля'),
    },
  ];

  return (
    <div className="assistance">
      {/* <Helmet>
        <title>Assitance</title>
        <meta name="description" content="Alin assistance" />
      </Helmet> */}

      <div className="bg_absolute">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-4">
              <div className="head_text">
                <h1 className="mb-3">{t('Послуга «Alin Assistance»')}</h1>
                <div>
                  <p>
                    {t(
                      'Багато справ, безліч дзвінків, важливі зустрічі, серйозні переговори? У величезному списку буденних справ, зовсім нема часу для свого чотирьох колісного залізного друга? Адже теж потребує уваги. Ми прагнемо аби ваше життя було комфортним, аби ви мали можливість займатись улюбленими справами, саме тому ми розробили унікальну програму з обслуговування клієнтів - персональний сервіс консультант Alin Assistance.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="text_grey assistance__subtitle">
              {t('Що входить?')}
            </h3>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <h2>{t('Особливі послуги')}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-7 col-lg-8 col-12">
            <div className="row row-cols-1 row-cols-lg-2 mt-3">
              {servicesData.map((data, index) => (
                <div key={index} className="col">
                  <div className={`row align-items-center mb-${5}`}>
                    <div className="col-lg-4 col-12 mb-lg-0 mb-3 text-lg-left text-center">
                      <img
                        // style={{ width: '125%' }}
                        className="loyalty-card__icon "
                        src={data.icon}
                        alt={data.iconAlt}
                      />
                    </div>
                    <div className="col-lg-8 col-12">
                      <p className="loyalty-card__description text-lg-left text-center">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-5 col-lg-4 col-12">
            <img
              className="img-responsive img-responsive_contain"
              src={car}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="main-principle d-flex mb-5">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="absol">
              <img
                src={last}
                className="img-responsive img-responsive_cover"
                alt="Cool driver"
              />
            </div>
            <div className="col-lg-5 offset-lg-7 mt-lg-0 mt-3">
              <div className="assistance__main-principle">
                <p>
                  {t(
                    'Основний принцип роботи компанії – не просто обслуговування автомобілів, а результат та вдячні постійні клієнти! Саме завдяки їй ви зможете зекономити свій час та нерви. Забудьте про безмежні черги та століття втраченого часу.'
                  )}
                </p>
                <p className="mt-4">
                  {t(
                    'Програма надає вам можливість вирішити всі технічні питання не виходячи з дому чи офісу. Лише один дзвінок і ось персональний сервіс консультант вирушає вам на допомогу.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
