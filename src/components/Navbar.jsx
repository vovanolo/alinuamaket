import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import $ from 'jquery';
import { Formik, Field, Form } from 'formik';
import { HashLink } from 'react-router-hash-link';

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
} from '../urls';

import '../styles/navbar.css';

import logo from '../images/Logo.png';

import Modal from './Modal';

const navThemesClassNames = {
  grey: 'navbar_grey navbar-text_dark navbar-light',
  white: 'bg-light navbar-text_dark navbar-light',
  transparent: ' navbar-text_dark navbar-light',
  semiTransparent: 'navbar_semi-transparent navbar-text_light navbar-dark',
};

const navTheme = {
  default: {
    inactive: navThemesClassNames.grey,
    active: navThemesClassNames.white,
  },
  transparent: {
    inactive: navThemesClassNames.transparent,
    active: navThemesClassNames.white,
  },
  semiTransparent: {
    inactive: navThemesClassNames.semiTransparent,
    active: navThemesClassNames.white,
  },
};

let scrollOffset = 0;

let currentUrl = home;

export default function Navbar() {
  const [language, setLanguage] = useState('ua');
  const [currentNavTheme, setCurrentNavTheme] = useState(navTheme.transparent);
  const [userScrolledDown, setUserScrolledDown] = useState(false);
  const [userOpenedNav, setUserOpenedNav] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const { t, i18n } = useTranslation();

  const navbar = useRef(null);

  const location = useLocation();

  //#region effects

  useEffect(() => {
    window.addEventListener('scroll', scrollEventHandler);

    $('#mainNavbar').on('show.bs.collapse', showNavbar);
    $('#mainNavbar').on('hide.bs.collapse', hideNavbar);
    // changeLanguage(localStorage.getItem('lang') || 'ua');

    return function cleanup() {
      window.removeEventListener('scroll', scrollEventHandler);

      $('#mainNavbar').off('show.bs.collapse');
      $('#mainNavbar').off('hide.bs.collapse');
    };
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
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: 0,
        },
        500
      );
    };
  }, [location]);

  useEffect(() => {
    // changeLanguage(localStorage.getItem('lang') || 'ua');
    const newLang = localStorage.getItem('lang') || 'ua';
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    // window.location.reload();
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
    window.location.reload();
  }

  function handleFormSubmit(values) {
    console.log(values);

    setIsLoading(true);

    // fetchModalData(values).then((res) => {
    //   setIsLoading(false);
    //   setSuccess(true);

    //   setTimeout(() => {
    //     setModalVisible(false);
    //     setSuccess(false);
    //   }, 3000);
    // });

    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);

      setTimeout(() => {
        setModalVisible(false);
        setSuccess(false);
      }, 3000);
    }, 1000);
  }

  function toggleModal() {
    setModalVisible((prevState) => !prevState);
  }

  //#endregion

  return (
    <>
      {userOpenedNav && (
        <div
          className="nav__backdrop"
          onClick={() => $('#mainNavbar').collapse('hide')}
        ></div>
      )}

      <nav
        style={{ transition: '0.2s background ease-in-out' }}
        className={`navbar navbar-expand-lg fixed-top ${
          userScrolledDown || userOpenedNav
            ? currentNavTheme.active
            : currentNavTheme.inactive
        }`}
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
          <div
            ref={navbar}
            className="collapse navbar-collapse"
            id="mainNavbar"
          >
            <ul
              className={`navbar-nav ${
                location.pathname === home ? 'navbar__menu-list' : 'ml-auto'
              }`}
            >
              <li className="nav-item dropdown mr-lg-3 mr-md-0">
                <button
                  style={{ paddingLeft: '0', paddingBottom: '0' }}
                  className={`btn nav-link dropdown-toggle ${
                    location.pathname === home ||
                    location.pathname === assistance
                      ? 'navbar__lang-btn_light'
                      : 'navbar__lang-btn_grey'
                  }`}
                  data-toggle="dropdown"
                >
                  {t('Прокат')}
                </button>
                <div className="dropdown-menu">
                  <Link to={`${rent}/lviv`} className="dropdown-item">
                    {t('Прокат авто Львів')}
                  </Link>
                  <Link to={`${rent}/kyiv`} className="dropdown-item">
                    {t('Прокат авто Київ')}
                  </Link>
                  <Link to={`${rent}/kharkiv`} className="dropdown-item">
                    {t('Прокат авто Харків')}
                  </Link>
                  <Link to={`${rent}/ivano_fankivsk`} className="dropdown-item">
                    {t('Прокат авто Івано-Франківськ')}
                  </Link>
                </div>
              </li>
              <li className="nav-item mr-lg-3 mr-md-0">
                <Link
                  to={rentWithDriver}
                  className="btn nav-link text-left padding_off"
                >
                  {t('Трансфери')}
                </Link>
              </li>
              <li className="nav-item dropdown mr-lg-3 mr-md-0">
                <button
                  style={{ paddingLeft: '0', paddingBottom: '0' }}
                  className={`btn nav-link dropdown-toggle ${
                    location.pathname === home ||
                    location.pathname === assistance
                      ? 'navbar__lang-btn_light'
                      : 'navbar__lang-btn_grey'
                  }`}
                  data-toggle="dropdown"
                >
                  {t('Послуги')}
                </button>
                <div className="dropdown-menu">
                  <Link to={assistance} className="dropdown-item">
                    {t('Асистенс')}
                  </Link>
                  <Link to={carSale} className="dropdown-item">
                    {t('Автовикуп')}
                  </Link>
                  <Link to={`${additional_options}`} className="dropdown-item">
                    {t('Додаткові опції')}
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown mr-lg-3 mr-md-0">
                <button
                  style={{ paddingLeft: '0', paddingBottom: '0' }}
                  className={`btn nav-link dropdown-toggle ${
                    location.pathname === home ||
                    location.pathname === assistance
                      ? 'navbar__lang-btn_light'
                      : 'navbar__lang-btn_grey'
                  }`}
                  data-toggle="dropdown"
                >
                  {t('Про компанію')}
                </button>
                <div className="dropdown-menu">
                  <Link to={loyaltyProgram} className="dropdown-item">
                    {t('Програма лояльності')}
                  </Link>
                  <Link to={aboutUs} className="dropdown-item">
                    {t('Про нас')}
                  </Link>
                  <Link to={faq} className="dropdown-item">
                    {t('FAQ')}
                  </Link>
                </div>
              </li>
              <li className="nav-item mr-lg-3 mr-md-0">
                <Link
                  to={`${news}`}
                  className="btn nav-link text-left padding_off"
                >
                  {t('Блог')}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={contacts}
                  className="btn nav-link text-left padding_off"
                >
                  {t('Контакти')}
                </Link>
              </li>
            </ul>

            <ul
              className={`navbar-nav ${
                location.pathname === home ? 'navbar__menu-language' : ''
              }`}
            >
              <li
                className={`nav-item dropdown ${
                  location.pathname !== home ? 'mx-lg-4 mx-md-0' : ''
                }`}
              >
                <button
                  className={`btn nav-link dropdown-toggle nav__lang-btn ${
                    location.pathname === home ||
                    location.pathname === assistance
                      ? 'navbar__lang-btn_light'
                      : 'navbar__lang-btn_grey'
                  }`}
                  data-toggle="dropdown"
                >
                  {language.toUpperCase()}
                </button>
                <div
                  className="dropdown-menu"
                  onClick={(e) =>
                    changeLanguage(e.target.innerText.toLowerCase())
                  }
                >
                  <button className="dropdown-item">UA</button>
                  <button className="dropdown-item">RU</button>
                  <button className="dropdown-item">EN</button>
                </div>
              </li>
              {location.pathname !== home && (
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn_main btn_nav"
                    onClick={toggleModal}
                  >
                    {t("Зв'язок")}
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
        {/* Modal */}
        <Modal visible={modalVisible} toggleVisible={toggleModal}>
          <div className="contact-modal">
            <Formik
              initialValues={{
                name: '',
                // email: '',
                phone: '',
              }}
              onSubmit={handleFormSubmit}
            >
              <Form>
                <div className="card">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      {t('Залиште свій номер і ми вам зателефонуємо!')}
                    </h5>
                    <button
                      type="button"
                      className="close"
                      aria-label="Close"
                      onClick={toggleModal}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <label className="w-100">
                          <Field
                            type="text"
                            name="name"
                            placeholder={t('Вкажіть імя')}
                            className="input"
                          />
                        </label>
                      </div>
                    </div>
                    {/* <div className="row">
                      <div className="col">
                        <label className="w-100">
                          <Field
                            type="email"
                            name="email"
                            placeholder={t('Вкажіть email')}
                            className="input"
                          />
                        </label>
                      </div>
                    </div> */}
                    <div className="row">
                      <div className="col">
                        <label className="w-100">
                          <Field
                            type="tel"
                            name="phone"
                            placeholder={t('Вкажіть телефон')}
                            className="input"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    {!success && (
                      <button
                        type="submit"
                        className="btn_main"
                        disabled={isLoading}
                      >
                        {isLoading && (
                          <>
                            <span
                              className="spinner-border spinner-border-sm mr-1"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Loading...
                          </>
                        )}
                        {!isLoading && !error && t('Відправити')}
                      </button>
                    )}
                    {!isLoading && !error && success && (
                      <div className="alert alert-success" role="alert">
                        {t('Відправлено')}
                      </div>
                    )}
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </Modal>
        {/* ./Modal */}
      </nav>
    </>
  );
}
