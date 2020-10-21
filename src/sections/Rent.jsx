import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import RentStep from '../components/RentStep';

import '../styles/rent.css';

import locationIcon from '../images/rent/location.svg';
import dateIcon from '../images/rent/date.svg';
import carKeyIcon from '../images/rent/car_key.svg';
import rentStepLine from '../images/rent/rent_step_line.svg';

export default function Rent() {
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

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3 className="rent-subtitle text_grey">{t('Як це працює?')}</h3>
          <h2 className="rent-title text_black">
            {t('Бронювати авто легше ніж ви думаєте')}
          </h2>
        </div>
      </div>

      <div className="row">
        <RentStep
          icon={locationIcon}
          iconAlt="Location icon"
          title={t('Оберіть локацію')}
          subTitle={t('Вкажіть зручне для вас місце розташування')}
        />

        <div className="rent-step__line">
          <img className="rent-step__line-icon" src={rentStepLine} alt="line" />
        </div>

        <RentStep
          icon={dateIcon}
          iconAlt="Choose your time icon"
          title={t('Оберіть дату')}
          subTitle={t('Визначіть зручний для вас час отримання авто')}
        />

        <div className="rent-step__line rent-step__line_inverted">
          <img className="rent-step__line-icon" src={rentStepLine} alt="line" />
        </div>

        <RentStep
          icon={carKeyIcon}
          iconAlt="Book your car icon"
          title={t('Бронюйте своє авто')}
          subTitle={t('Залишилось обрати автомобіль який ви отримаєте')}
        />
      </div>
    </div>
  );
}
