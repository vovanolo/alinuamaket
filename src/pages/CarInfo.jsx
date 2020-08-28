import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/breadcumbs.css';
import '../styles/car_info.css';

import CarSpec from '../components/CarSpec';

export default function CarInfo() {
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

  const carSpecs = [
    {
      title: t('Загальні'),
      specs: [
        {
          name: t('Регіон походження бренду'),
          value: t('Європа')
        },
        {
          name: t('Класс'),
          value: t('Е класс(бізнес)')
        },
        {
          name: t('Тип кузову'),
          value: t('Седан')
        },
        {
          name: t('Паливо'),
          value: t('Гібрид')
        }
      ]
    }
  ];

  return (
    <div className="container">

      <div className="row navbar-offset">
        <div className="col">
          <ul className="breadcumbs">
            <li className="breadcumbs__item">{t('Прокат автомобілів')}</li>
            <li className="breadcumbs__item">BMW S SERIES SEDAN</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-3">
          <div className="row">
            <div className="col">
              <h3 className="text_black">{t('Загальні технічні характеристики')}</h3>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              {carSpecs.map(({ title, specs }, index) => (
                <CarSpec key={index} title={title} specs={specs} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-xl-6">

        </div>
        <div className="col-xl-3">

        </div>
      </div>
    </div>
  );
}
