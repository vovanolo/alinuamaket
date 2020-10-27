import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import {
  home,
  assistance,
  rent,
  rentWithDriver,
  contacts,
  faq,
  news,
  carSale,
  aboutUs,
  loyaltyProgram,
  additional_options,
  rent_conditions,
  confidential_policy,
} from '../urls';

import '../styles/footer.css';
import '../styles/footer-media.css';

import { insta } from '../urls';

import logo from '../images/Logo.png';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import mail from '../images/mail.svg';
import goUp from '../images/go_up.svg';

import map from '../images/map-pin.svg';
import darkmail from '../images/darkmail.svg';
import phone from '../images/phone.svg';

import ContactsPopup from './ContactsPopup';

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
            <Link to="/" className="footer__logo">
              <img src={logo} alt="Alin logo" />
            </Link>
          </div>
          <div className="col-xl-8 col-lg-7 col-12">
            <div className="row">
              <div className="col-md-4">
                <ul className="footer__menu d-flex flex-column">
                  <li>
                    <p className="text_grey footer__menu-item">Послуги</p>
                  </li>
                  <li className="footer__menu-item">
                    <Link to={rent} className="text_black">
                      {t('Прокат')}
                    </Link>
                  </li>
                  <li className="footer__menu-item">
                    <Link to={rentWithDriver} className="text_black">
                      {t('Трансфери')}
                    </Link>
                  </li>
                  <li className="footer__menu-item">
                    <Link to={assistance} className="text_black">
                      {t('Асистенс')}
                    </Link>
                  </li>
                  <li className="footer__menu-item">
                    <Link to={faq} className="text_black">
                      FAQ
                    </Link>
                  </li>
                  <li className="footer__menu-item">
                    <Link to={contacts} className="text_black">
                      {t('Контакти')}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="footer__menu d-flex flex-column">
                  <li>
                    <p className="text_grey footer__menu-item">Про компанію</p>
                  </li>
                  <li className="footer__menu-item">
                    <Link to={rent_conditions} className="text_black">
                      {t('Умови оренди')}
                    </Link>
                  </li>
                  <li className="footer__menu-item">
                    <Link to={aboutUs} className="text_black">
                      {t('Про нас')}
                    </Link>
                  </li>
                  <li className="footer__menu-item">
                    <Link to={faq} className="text_black">
                      {t('Часті запитання')}
                    </Link>
                  </li>
                  <li className="footer__menu-item">
                    <Link to={confidential_policy} className="text_black">
                      {t('Політика конфіденційності')}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="footer__menu d-flex flex-column">
                  <li className="footer__menu-item">
                    <p className="text_grey">Контакти</p>
                  </li>
                  <li className="footer__menu-item">
                    <img src={map} alt="" />
                    <span className="ml-2">вул. Любінська 196</span>
                  </li>
                  <li className="footer__menu-item">
                    <img src={darkmail} alt="" />
                    <span className="ml-2">alin.lviv@gmail.com</span>
                  </li>
                  <li className="footer__menu-item">
                    <img src={phone} alt="" />
                    <span className="ml-2">+38 098 777 16 00</span>
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
                  href="https://www.facebook.com/1678443565589651/"
                >
                  <img src={facebook} alt="Facebook" />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://instagram.com/alin_services_for_you?igshid=12br995xgk9tr"
                >
                  <img src={instagram} alt="Instagram" />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="mailto:alin.lviv@gmail.com"
                >
                  <img src={mail} alt="Mail" />
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
