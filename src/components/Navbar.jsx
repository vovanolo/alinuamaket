import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import $ from 'jquery';

import '../styles/navbar.css';

import logo from '../images/Logo.png';

export default function Navbar() {
  const [language, setLanguage] = useState('ua');
  const [scrollOffset, setScrollOffset] = useState(0);

  const { t, i18n } = useTranslation();

  const navbarContainer = useRef(null);
  const navbar = useRef(null);

  const location = useLocation();

  //#region effects

  useEffect(() => {
    const url = location.pathname;

    if (url === '/assistance') {
      navbarContainer.current.classList.remove('navbar_default');
      navbarContainer.current.classList.add('navbar_assistance');
      navbarContainer.current.classList.remove('navbar-light');
      navbarContainer.current.classList.add('navbar-dark');
    }
    else if (url !== '/alinuamaket') {
      navbarContainer.current.classList.remove('navbar_assistance');
      navbarContainer.current.classList.add('navbar_default');
      navbarContainer.current.classList.remove('navbar-dark');
      navbarContainer.current.classList.add('navbar-light');
    }
    else if (url === '/alinuamaket') {
      navbarContainer.current.classList.remove('navbar_assistance');
      navbarContainer.current.classList.remove('navbar_default');
      navbarContainer.current.classList.remove('navbar-dark');
      navbarContainer.current.classList.add('navbar-light');
    }

    return function cleanup() {
      navbarContainer.current.classList.remove('navbar_assistance');
      $('#mainNavbar').collapse('hide');
    }
  }, [location]);

  useEffect(() => {
    window.addEventListener('scroll', scrollEventHandler);

    return function cleanup() {
      window.removeEventListener('scroll', scrollEventHandler);
    }
  }, [navbar]);

  useEffect(() => {
    if (scrollOffset > 70) {
      navbarContainer.current.classList.add('bg-light');

      if (navbarContainer.current.classList.contains('navbar-dark')) {
        navbarContainer.current.classList.remove('navbar-dark');
      }
      
      navbarContainer.current.classList.add('navbar-light');
    }
    else {
      navbarContainer.current.classList.remove('bg-light');

      if (location.pathname === '/assistance') {
        navbarContainer.current.classList.add('navbar-dark');
      }
    }
  }, [scrollOffset]);

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
  }, [language]);

  //#endregion

  //#region functions

  function scrollEventHandler(e) {
    setScrollOffset(e.currentTarget.pageYOffset);
  }

  function changeLanguage(newLanguage) {
    const newLang = newLanguage;
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }

  function toggleNavbar() {
    console.log(scrollOffset);
    if (scrollOffset < 70) {
      console.log(1);
      if (!navbarContainer.current.classList.contains('bg-light')) {
        showNavbar();
      }
      else {
        hideNavbar();
      }
    }
  }

  function showNavbar() {
    if (location.pathname === '/alinuamaket') {
      navbarContainer.current.classList.add('bg-light');

      if (navbarContainer.current.classList.contains('navbar-dark')) {
        navbarContainer.current.classList.remove('navbar-dark');
      }
    }
  }

  function hideNavbar() {
    if (location.pathname === '/alinuamaket') {
      navbarContainer.current.classList.remove('bg-light');

      if (location.pathname === '/assistance') {
        navbarContainer.current.classList.add('navbar-dark');
      }
    }
  }

  //#endregion

  return (
    <nav
      ref={navbarContainer}
      style={{ transition: '0.2s background ease-in-out' }}
      className="navbar navbar-expand-lg navbar-light fixed-top"
    >
      <div className="container">
        <Link to="/alinuamaket" className="navbar-brand">
          <img src={logo} alt="Alin logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavbar" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon" />
        </button>
        <div ref={navbar} className="collapse navbar-collapse" id="mainNavbar">
          <ul className={`navbar-nav ${location.pathname === '/alinuamaket' ? 'navbar__menu-list' : 'ml-auto'}`}>
            <li className="nav-item mr-lg-3 mr-md-0">
              <Link to="/rent" className="nav-link">{t('Прокат')}</Link>
            </li>
            <li className="nav-item mr-lg-3 mr-md-0">
              <Link to="/rent_with_driver" className="nav-link">{t('Трансфери')}</Link>
            </li>
            <li className="nav-item mr-lg-3 mr-md-0">
              <Link to="/assistance" className="nav-link">{t('Асистенс')}</Link>
            </li>
            <li className="nav-item mr-lg-3 mr-md-0">
              <Link to="/alinuamaket" className="nav-link">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacts" className="nav-link">{t('Контакти')}</Link>
            </li>
          </ul>

          <ul className={`navbar-nav ${location.pathname === '/alinuamaket' && 'navbar__menu-language'}`}>
            <li className={`nav-item dropdown ${location.pathname !== '/alinuamaket' && 'mx-lg-4 mx-md-0'}`}>
              <button className="btn nav-link dropdown-toggle" data-toggle="dropdown">
                {language.toUpperCase()}
              </button>
              <div className="dropdown-menu" onClick={(e) => changeLanguage(e.target.innerText.toLowerCase())}>
                <button className="dropdown-item">UA</button>
                <button className="dropdown-item">RU</button>
              </div>
            </li>
            {location.pathname !== '/alinuamaket' && (
              <li className="nav-item">
                <button className="btn_main btn_nav">
                  {t('Зв\'язок')}
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
