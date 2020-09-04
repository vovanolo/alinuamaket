import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import '../styles/footer.css';
import '../styles/footer-media.css';

import logo from '../images/Logo.png';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import mail from '../images/mail.svg';
import goUp from '../images/go_up.svg';

export default function Footer() {
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

  function scrollTop() {
    $([document.documentElement, document.body]).animate({
      scrollTop: 0
    }, 1000);
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 col-12">
            <Link to="/" className="footer__logo">
              <img src={logo} alt="Alin logo" />
            </Link>
          </div>

          <div className="col-lg-6 col-12">
            <ul className="footer__menu">
              <li className="footer__menu-item">
                <Link to="/" className="text_black">{t('Прокат')}</Link>
              </li>
              <li className="footer__menu-item">
                <Link to="/" className="text_black">{t('Трансфери')}</Link>
              </li>
              <li className="footer__menu-item">
                <Link to="/" className="text_black">{t('Асистенс')}</Link>
              </li>
              <li className="footer__menu-item">
                <Link to="/" className="text_black">FAQ</Link>
              </li>
              <li className="footer__menu-item">
                <Link to="/" className="text_black">{t('Контакти')}</Link>
              </li>
            </ul>
          </div>

          <div className="col-xl-2 col-lg-3 offset-xl-1 col-12">
            <ul className="footer__social-list">
              <li className="footer__social-item">
                <Link to="/">
                  <img src={facebook} alt="Facebook" />
                </Link>
              </li>
              <li className="footer__social-item">
                <Link to="/">
                  <img src={instagram} alt="Instagram" />
                </Link>
              </li>
              <li className="footer__social-item">
                <Link to="/">
                  <img src={mail} alt="Mail" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-1 col-12">
            <button className="footer__up-btn" onClick={scrollTop}>
              <img src={goUp} alt="Go up" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
