import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logo from '../images/Logo.png';

export default function Navbar() {
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
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Alin logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavbar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ml-auto mr-auto">
            <li className="nav-item">
              <Link to="/rent" className="nav-link">{t('Прокат')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/rent_with_driver" className="nav-link">{t('Трансфери')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">{t('Асистенс')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">{t('Контакти')}</Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button className="btn nav-link dropdown-toggle" data-toggle="dropdown">
                {language.toUpperCase()}
              </button>
              <div className="dropdown-menu" onClick={(e) => changeLanguage(e.target.innerText.toLowerCase())}>
                <button className="dropdown-item">UA</button>
                <button className="dropdown-item">RU</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
