import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/components/navigation/navigation.scss';

import '../styles/partners.css';

import niko from '../images/partners/niko.png';
import mitsubishi from '../images/partners/mitsubishi.png';
import sonata from '../images/partners/sonata.png';
import citadel from '../images/partners/citadel.png';
import itClub from '../images/partners/it_club.png';
// import motors from '../images/partners/motors.jpg';

import arrowLeft from '../images/partners/arrow_left.svg';

SwiperCore.use([Pagination, Autoplay, Navigation]);

export default function Partners() {
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
          <h2 className="text_black partners__title">
            {t('Партнери компанії')}
          </h2>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Swiper
            loop
            navigation={{
              prevEl: '.partners-slider__navigation-btn_left',
              nextEl: '.partners-slider__navigation-btn_right',
            }}
            className="slider__container_partners"
            autoplay={{
              delay: 5000,
            }}
            slidesPerView={5}
            breakpoints={{
              992: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 3,
              },
              450: {
                slidesPerView: 2,
              },
              1: {
                slidesPerView: 1,
              },
            }}
            spaceBetween={30}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img
                className="img-responsive img-responsive_contain"
                src={niko}
                alt="niko"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-responsive img-responsive_contain img-responsive_right"
                src={mitsubishi}
                alt="mitsubishi"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-responsive img-responsive_contain img-responsive_right"
                src={sonata}
                alt="sonata"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-responsive img-responsive_contain img-responsive_right"
                src={citadel}
                alt="citadel"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="img-responsive img-responsive_contain img-responsive_right"
                src={itClub}
                alt="itClub"
              />
            </SwiperSlide>
          </Swiper>

          <button className="partners-slider__navigation-btn partners-slider__navigation-btn_left">
            <img src={arrowLeft} alt="Slider left arrow" />
          </button>
          <button className="partners-slider__navigation-btn partners-slider__navigation-btn_right">
            <img src={arrowLeft} alt="Slider right arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
