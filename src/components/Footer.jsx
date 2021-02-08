import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import $ from 'jquery';

import urls from '../urls';

import '../styles/footer.css';
import '../styles/footer-media.css';

import logoNew from '../images/alin-logo.svg';

import facebook from '../images/facebook-logo.svg';
import instagram from '../images/instagram-logo.svg';
import mail from '../images/email-logo.svg';
import goUp from '../images/go_up.svg';

import map from '../images/map-pin.svg';
import darkmail from '../images/darkmail.svg';
import phone from '../images/phone.svg';

import telegram from '../images/telegram.svg';
import viber from '../images/viber.svg';
import whatsapp from '../images/whatsapp.svg';

import ContactsPopup from './ContactsPopup';
import Link from './LocalizedLink';

export default function Footer() {
  const [language, setLanguage] = useState('ua');
  const [userScrolledDown, setUserScrolledDown] = useState(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.addEventListener('scroll', scrollEventHandler);

    return function cleanup() {
      window.removeEventListener('scroll', scrollEventHandler);
    };
  }, []);

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
  }, [language]);

  function changeLanguage(newLanguage) {
    const newLang = newLanguage;
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }

  function scrollTop() {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: 0,
      },
      1000
    );
  }

  function scrollEventHandler(e) {
    setUserScrolledDown(e.currentTarget.pageYOffset > 70);
  }

  return (
    <footer className="footer">
      <ContactsPopup />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-2 col-lg-2 col-12">
            <Link to={urls.home} className="footer__logo">
              <img width="78" height="49" src={logoNew} alt="Alin logo" />
            </Link>
          </div>
          <div className="col-xl-8 col-lg-7 col-12">
            <div className="row">
              <div className="col-md-4">
                <ul className="footer__menu d-flex flex-column">
                  <li>
                    <p className="text_grey footer__menu-item">
                      {t('Послуги')}
                    </p>
                  </li>
                  <li className="footer__menu-item">
                    <Link to={`${urls.rent}/lviv`} className="text_black">
                      {t('Прокат авто')}
                      {t(' ')}
                      {t('Львів')}
                    </Link>
                  </li>
                  <li className="footer__menu-item">
                    <Link to={urls.rentWithDriver} className="text_black">
                      {t('Трансфери')}
                    </Link>
                  </li>
                  <li className="footer__menu-item">
                    <Link to={urls.assistance} className="text_black">
                      {t('Асистенс')}
                    </Link>
                  </li>
                  <li className="footer__menu-item">
                    <Link to={urls.faq} className="text_black">
                      FAQ
                    </Link>
                  </li>
                  <li className="footer__menu-item">
                    <Link to={urls.contacts} className="text_black">
                      {t('Контакти')}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="footer__menu d-flex flex-column">
                  <li>
                    <p className="text_grey footer__menu-item">
                      {t('Про компанію')}
                    </p>
                  </li>
                  <li className="footer__menu-item">
                    <Link to={urls.rentConditions} className="text_black">
                      {t('Умови оренди')}
                    </Link>
                  </li>
                  <li className="footer__menu-item">
                    <Link to={urls.aboutUs} className="text_black">
                      {t('Про нас')}
                    </Link>
                  </li>
                  <li className="footer__menu-item">
                    <Link to={urls.faq} className="text_black">
                      {t('Часті запитання')}
                    </Link>
                  </li>
                  <li className="footer__menu-item">
                    <Link to={urls.confidentialPolicy} className="text_black">
                      {t('Політика конфіденційності')}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="footer__menu d-flex flex-column">
                  <li className="footer__menu-item">
                    <p className="text_grey">{t('Контакти')}</p>
                  </li>
                  <li className="footer__menu-item">
                    <img src={darkmail} alt="" />
                    <span className="ml-2">lviv@alin.ua</span>
                  </li>
                  <li className="footer__menu-item">
                    <img src={phone} alt="" />
                    <a className="text_black" href="tel:+38 098 777 16 00">
                      <span className="ml-2">+38 098 777 16 00</span>
                    </a>
                  </li>
                  <li className="footer__menu-item">
                    <img src={phone} alt="" />
                    <a className="text_black" href="tel:+38 098 777 15 00">
                      <span className="ml-2">+38 098 777 15 00</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-lg-3 col-12">
            <ul className="footer__social-list">
              <li className="footer__social-item">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.facebook.com/alin_services_for_you-107208224245653"
                >
                  <img width="21" height="21" src={facebook} alt="Facebook" />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://instagram.com/alin_rent_a_car"
                >
                  <img width="21" height="21" src={instagram} alt="Instagram" />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="mailto:lviv@alin.ua"
                >
                  <img width="21" height="21" src={mail} alt="Mail" />
                </a>
              </li>
            </ul>
            <ul className="footer__social-list mt-4">
              <li className="footer__social-item">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://telegram.me/alin_services_for_you"
                >
                  <img width="21" height="21" src={telegram} alt="telegram" />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="viber://chat?number=%2B380987771600"
                >
                  <img width="21" height="21" src={viber} alt="viber" />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://wa.me/380987771600"
                >
                  <img width="21" height="21" src={whatsapp} alt="whatsapp" />
                </a>
              </li>
            </ul>
          </div>
          <button
            className={`footer__up-btn ${
              userScrolledDown ? undefined : 'hidden'
            }`}
            onClick={scrollTop}
          >
            <img src={goUp} alt="Go up" />
          </button>
        </div>
      </div>
    </footer>
  );
}
