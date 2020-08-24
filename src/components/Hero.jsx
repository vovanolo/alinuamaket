import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import heroStyles from '../styles/Hero.module.css';
import '../styles/hero.css';

import slide01 from '../images/Slider/01_Car.png';

SwiperCore.use([Pagination, Autoplay]);

export default function Hero() {
  const [language, setLanguage] = useState('ua');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
  }, [language]);

  function changeLanguage(newLanguage) {
    const newLang = newLanguage || 'ua';
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }

  return (
    <>
      <Swiper
        className={heroStyles.sliderContainer}
        loop
        autoplay={{
          delay: 5000
        }}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img className="img-responsive img-responsive_contain" src={slide01} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img-responsive img-responsive_contain" src={slide01} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img-responsive img-responsive_contain" src={slide01} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
      <div className="container">
        <div className={heroStyles.ctaBox}>
          <div className="row">
            <div className="col">
              <div className={heroStyles.titleBox}>
                <h1 className="hero__title">
                  <span className="text_black">{t('Прокат нових авто')}</span>
                  <br />
                  <span className="text_grey">{t('у Львові')}</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-3">
              <button className="btn_main">
                {t('Орендувати')}
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
