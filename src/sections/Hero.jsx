import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import '../styles/hero.css';

import slide01 from '../images/slider/01_Car.png';

SwiperCore.use([Pagination, Autoplay]);

export default function Hero() {
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
    <>
      <Swiper
        className="slider__container_hero"
        loop
        autoplay={{
          delay: 5000
        }}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true
        }}
      >
        <SwiperSlide>
          <img className="img-responsive img-responsive_contain img-responsive_right" src={slide01} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img-responsive img-responsive_contain img-responsive_right" src={slide01} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img-responsive img-responsive_contain img-responsive_right" src={slide01} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
      
      <div className="container">
        <div className="hero-cta-box">
          <div className="row">
            <div className="col">
              <div className="hero-cta-box__title-box">
                <h1>
                  <span className="text_black hero-cta-box__title">{t('Прокат нових авто')}</span>
                  <span className="text_grey hero-cta-box__subtitle">{t('у Львові')}</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col">
              <Link to="/rent" className="btn_main">{t('Орендувати')}</Link>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
