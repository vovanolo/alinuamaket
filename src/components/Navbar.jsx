import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import $ from 'jquery';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { fetchCallBack } from '../utils/fetchCallBack';
import { fetchAllCities } from '../utils/fetchAllCities';

import { useTranslate } from '../hooks/useTranslate';

import urls from '../urls';

import '../styles/navbar.css';

import logoNew from '../images/alin-logo.svg';

import Modal from './Modal';
import Link from './LocalizedLink';

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

let currentUrl = urls.home;

export default function Navbar() {
  const [currentNavTheme, setCurrentNavTheme] = useState(navTheme.transparent);
  const [userScrolledDown, setUserScrolledDown] = useState(false);
  const [userOpenedNav, setUserOpenedNav] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [cities, setCities] = useState([]);
  const [citiesLoading, setCitiesLoading] = useState(false);

  const navbar = useRef(null);

  const location = useLocation();

  const { t, i18n, getLocalizedUrl, changeLanguage } = useTranslate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2).required(),
    phone: Yup.string().min(10).required(),
  });

  //#region effects

  useEffect(() => {
    window.addEventListener('scroll', scrollEventHandler);

    $('#mainNavbar').on('show.bs.collapse', showNavbar);
    $('#mainNavbar').on('hide.bs.collapse', hideNavbar);

    return () => {
      window.removeEventListener('scroll', scrollEventHandler);

      $('#mainNavbar').off('show.bs.collapse');
      $('#mainNavbar').off('hide.bs.collapse');
    };
  }, []);

  useEffect(() => {
    setCitiesLoading(true);

    fetchAllCities('ua')
      .then((res) => setCities(res))
      .finally(() => setCitiesLoading(false));
  }, []);

  useEffect(() => {
    currentUrl = location.pathname;

    switch (currentUrl) {
      case urls.home:
        setCurrentNavTheme(navTheme.transparent);
        break;

      case urls.assistance:
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
  }, [location.pathname]);

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

  function handleFormSubmit(values) {
    console.log(values);

    setIsLoading(true);

    fetchCallBack(values).then((res) => {
      setIsLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setModalVisible(false);
        setSuccess(false);
      }, 3000);
      console.log(res);
    });

    // Good comment
    // setTimeout(() => {
    //   setIsLoading(false);
    //   setSuccess(true);
    //   // setTimeout(() => {
    //   //   setModalVisible(false);
    //   //   setSuccess(false);
    //   // }, 3000);
    // }, 1000);
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
          <Link to={urls.home} className="navbar-brand">
            <img width="78" height="49" src={logoNew} alt="Alin logo" />
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
                location.pathname === getLocalizedUrl(urls.home)
                  ? 'navbar__menu-list'
                  : 'ml-auto'
              }`}
            >
              <li className="nav-item dropdown mr-lg-3 mr-md-0">
                <button
                  style={{ paddingLeft: '0', paddingBottom: '0' }}
                  className={`btn nav-link dropdown-toggle ${
                    location.pathname === getLocalizedUrl(urls.home) ||
                    location.pathname === getLocalizedUrl(urls.assistance)
                      ? 'navbar__lang-btn_light'
                      : 'navbar__lang-btn_grey'
                  }`}
                  data-toggle="dropdown"
                >
                  {t('Прокат')}
                </button>
                <div className="dropdown-menu">
                  {citiesLoading && (
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  )}
                  {cities.length > 0 &&
                    cities.map((city) => (
                      <Link
                        key={city.id}
                        to={`${urls.rent}/${city.slug}`}
                        className="dropdown-item"
                      >
                        {t(`Прокат авто`)} {city.title}
                      </Link>
                    ))}
                </div>
              </li>
              <li className="nav-item mr-lg-3 mr-md-0">
                <Link
                  to={urls.rentWithDriver}
                  className="btn nav-link text-left padding_off"
                >
                  {t('Трансфери')}
                </Link>
              </li>
              <li className="nav-item dropdown mr-lg-3 mr-md-0">
                <button
                  style={{ paddingLeft: '0', paddingBottom: '0' }}
                  className={`btn nav-link dropdown-toggle ${
                    location.pathname === getLocalizedUrl(urls.home) ||
                    location.pathname === getLocalizedUrl(urls.assistance)
                      ? 'navbar__lang-btn_light'
                      : 'navbar__lang-btn_grey'
                  }`}
                  data-toggle="dropdown"
                >
                  {t('Послуги')}
                </button>
                <div className="dropdown-menu">
                  <Link to={urls.assistance} className="dropdown-item">
                    {t('Асистенс')}
                  </Link>
                  <Link to={urls.carSale} className="dropdown-item">
                    {t('Автовикуп')}
                  </Link>
                  <Link
                    to={`${urls.additionalOptions}`}
                    className="dropdown-item"
                  >
                    {t('Додаткові опції')}
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown mr-lg-3 mr-md-0">
                <button
                  style={{ paddingLeft: '0', paddingBottom: '0' }}
                  className={`btn nav-link dropdown-toggle ${
                    location.pathname === getLocalizedUrl(urls.home) ||
                    location.pathname === getLocalizedUrl(urls.assistance)
                      ? 'navbar__lang-btn_light'
                      : 'navbar__lang-btn_grey'
                  }`}
                  data-toggle="dropdown"
                >
                  {t('Про компанію')}
                </button>
                <div className="dropdown-menu">
                  <Link to={urls.loyaltyProgram} className="dropdown-item">
                    {t('Програма лояльності')}
                  </Link>
                  <Link to={urls.aboutUs} className="dropdown-item">
                    {t('Про нас')}
                  </Link>
                  <Link to={urls.faq} className="dropdown-item">
                    {t('FAQ')}
                  </Link>
                </div>
              </li>
              <li className="nav-item mr-lg-3 mr-md-0">
                <Link
                  to={urls.news}
                  className="btn nav-link text-left padding_off"
                >
                  {t('Блог')}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={urls.contacts}
                  className="btn nav-link text-left padding_off"
                >
                  {t('Контакти')}
                </Link>
              </li>
            </ul>

            <ul
              className={`navbar-nav ${
                location.pathname === getLocalizedUrl(urls.home)
                  ? 'navbar__menu-language'
                  : ''
              }`}
            >
              <li
                className={`nav-item dropdown ${
                  location.pathname !== getLocalizedUrl(urls.home)
                    ? 'mx-lg-4 mx-md-0'
                    : ''
                }`}
              >
                <button
                  className={`btn nav-link dropdown-toggle nav__lang-btn ${
                    location.pathname === getLocalizedUrl(urls.home) ||
                    location.pathname === getLocalizedUrl(urls.assistance)
                      ? 'navbar__lang-btn_light'
                      : 'navbar__lang-btn_grey'
                  }`}
                  data-toggle="dropdown"
                >
                  {i18n.language.toUpperCase()}
                </button>
                <div className="dropdown-menu">
                  {Object.keys(i18n.store.data).map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      className="dropdown-item"
                      onClick={() => changeLanguage(lang)}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </li>
              {location.pathname !== getLocalizedUrl(urls.home) && (
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
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
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
                            <input
                              type="text"
                              name="name"
                              placeholder={t('Вкажіть імя')}
                              className="input"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.name}
                            />
                            {props.errors.name && (
                              <span className="reserv__input-error">
                                {props.errors.name}
                              </span>
                            )}
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <label className="w-100">
                            <input
                              type="tel"
                              name="phone"
                              placeholder={t('Вкажіть телефон')}
                              className="input"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.phone}
                            />
                            {props.errors.phone && (
                              <span className="reserv__input-error">
                                {props.errors.phone}
                              </span>
                            )}
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
                </form>
              )}
            </Formik>
          </div>
        </Modal>

        {/* ./Modal */}
      </nav>
    </>
  );
}
