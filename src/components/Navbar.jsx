import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import $ from 'jquery';

import { home, assistance, rent, rentWithDriver, contacts } from '../urls';

import '../styles/navbar.css';

import logo from '../images/Logo.png';

const navThemesClassNames = {
  grey: 'navbar_grey navbar-text_dark navbar-light',
  white: 'bg-light navbar-text_dark navbar-light',
  transparent: ' navbar-text_dark navbar-light',
  semiTransparent: 'navbar_semi-transparent navbar-text_light navbar-dark'
};

const navTheme = {
  default: {
    inactive: navThemesClassNames.grey,
    active: navThemesClassNames.white
  },
  transparent: {
    inactive: navThemesClassNames.transparent,
    active: navThemesClassNames.white
  },
  semiTransparent: {
    inactive: navThemesClassNames.semiTransparent,
    active: navThemesClassNames.white
  }
};

let scrollOffset = 0;

let currentUrl = home;

export default function Navbar() {
  const [language, setLanguage] = useState('ua');
  const [currentNavTheme, setCurrentNavTheme] = useState(navTheme.transparent);
  const [userScrolledDown, setUserScrolledDown] = useState(false);
  const [userOpenedNav, setUserOpenedNav] = useState(false);

  const { t, i18n } = useTranslation();

  const navbar = useRef(null);

  const location = useLocation();

  //#region effects

  useEffect(() => {
    window.addEventListener('scroll', scrollEventHandler);

    $('#mainNavbar').on('show.bs.collapse', showNavbar);
    $('#mainNavbar').on('hide.bs.collapse', hideNavbar);

    return function cleanup() {
      window.removeEventListener('scroll', scrollEventHandler);
      
      $('#mainNavbar').off('show.bs.collapse');
      $('#mainNavbar').off('hide.bs.collapse');
    }
  }, []);

  useEffect(() => {
    currentUrl = location.pathname;

    switch (currentUrl) {
      case home:
        setCurrentNavTheme(navTheme.transparent);
        break;
      
      case assistance:
        setCurrentNavTheme(navTheme.semiTransparent);
        break;
    
      default:
        setCurrentNavTheme(navTheme.default);
        break;
    }

    return function cleanup() {
      $('#mainNavbar').collapse('hide');
      $([document.documentElement, document.body]).animate({
        scrollTop: 0
      }, 500);
    }
  }, [location]);

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
  }, [language]);

  //#endregion

  //#region functions

  function showNavbar() {
    setUserOpenedNav(true);
  }

  function hideNavbar() {
    setUserOpenedNav(false);
  }

  function scrollEventHandler(e) {
    scrollOffset = e.currentTarget.pageYOffset;

    setUserScrolledDown(scrollOffset > 70);
  }

  function changeLanguage(newLanguage) {
    const newLang = newLanguage;
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }

  //#endregion

  return (
    <nav
      style={{ transition: '0.2s background ease-in-out' }}
      className={`navbar navbar-expand-lg fixed-top ${userScrolledDown || userOpenedNav
        ? currentNavTheme.active
        : currentNavTheme.inactive}`}
    >
      <div className="container">
        <Link to={home} className="navbar-brand">
          <img src={logo} alt="Alin logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div ref={navbar} className="collapse navbar-collapse" id="mainNavbar">
          <ul className={`navbar-nav ${location.pathname === home ? 'navbar__menu-list' : 'ml-auto'}`}>
            <li className="nav-item mr-lg-3 mr-md-0">
              <Link to={rent} className="nav-link">{t('Прокат')}</Link>
            </li>
            <li className="nav-item mr-lg-3 mr-md-0">
              <Link to={rentWithDriver} className="nav-link">{t('Трансфери')}</Link>
            </li>
            <li className="nav-item mr-lg-3 mr-md-0">
              <Link to={assistance} className="nav-link">{t('Асистенс')}</Link>
            </li>
            <li className="nav-item">
              <Link to={contacts} className="nav-link">{t('Контакти')}</Link>
            </li>
          </ul>

          <ul className={`navbar-nav ${location.pathname === home ? 'navbar__menu-language' : ''}`}>
            <li className={`nav-item dropdown ${location.pathname !== home ? 'mx-lg-4 mx-md-0' : ''}`}>
              <button className={`btn nav-link dropdown-toggle nav__lang-btn ${location.pathname === home || location.pathname === assistance ? 'navbar__lang-btn_light' : 'navbar__lang-btn_grey'}`} data-toggle="dropdown">
                {language.toUpperCase()}
              </button>
              <div className="dropdown-menu" onClick={(e) => changeLanguage(e.target.innerText.toLowerCase())}>
                <button className="dropdown-item">UA</button>
                <button className="dropdown-item">RU</button>
              </div>
            </li>
            {location.pathname !== home && (
              <li className="nav-item">
                <Link to={contacts} className="btn_main btn_nav">
                  {t('Зв\'язок')}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
