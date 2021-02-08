import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import slide01 from '../images/slider/01.png';
import slide02 from '../images/slider/02.png';
import slide03 from '../images/slider/03.png';
import v from '../images/carsale/2020.svg';
import x from '../images/carsale/x.svg';

import { fetchCarSale } from '../utils/fetchCarSale';
import { fetchSeoSale } from '../utils/fetchSeoSale';
let mounted;

export default function CarSale() {
  const [language, setLanguage] = useState('ua');
  const { t, i18n } = useTranslation();

  const [carSale, setCarSale] = useState([]);
  const [seoSale, setSeoSale] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  mounted = true;

  useEffect(() => {
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
  }, [language]);

  useEffect(() => {
    fetchCarSale(localStorage.getItem('lang'))
      .then((res) => {
        setCarSale(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);

    fetchSeoSale(localStorage.getItem('lang'))
      .then((res) => {
        if (mounted) {
          setSeoSale(res);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
        }
      })
      .finally(() => {
        if (mounted) {
          setIsLoading(false);
        }
      });
  }, [i18n.language]);

  function changeLanguage(newLanguage) {
    const newLang = newLanguage;
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }
  return (
    <div className="navbar-offset">
      <div className="container">
        {/* старий автовикуп */}
        {/* <div className="row">
          <div className="col d-flex justify-content-center flex-column">
            <h3>
              {t('Для замовлення автовикупу звяжіться з нами за телефоном')}
            </h3>
            <h3 className="mt-3">
              <a href="tel:+380987771600">
                <b>+38 098 777 1600</b>
              </a>
            </h3>
          </div>
        </div> */}
        {/* старий автовикуп */}
        {/* новий автовикуп */}
        <div className="row">
          <div className="col">
            <h1 className="text-center">{t('Оренда авто з правом викупу')}</h1>
          </div>
        </div>
        {carSale.map((car) => (
          <div key={car.slug} className="row justify-content-center mt-5 mb-5">
            <div className="col-md-12 border border-dark">
              <div className="row justify-content-center">
                <div className="col-md-6 p-0 mx-0">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide h-100"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner h-100">
                      <div className="carousel-item active h-100">
                        <img
                          src={car.images[0].path}
                          className="d-block w-100 h-100"
                          alt="..."
                          // style={{ height: '140%' }}
                        />
                      </div>
                      {car.images.length > 0 &&
                        car.images.slice(1).map((image) => (
                          <div key={image.id} className="carousel-item h-100">
                            <img
                              src={image.path}
                              className="d-block w-100 h-100"
                              alt="..."
                              // style={{ maxHeight: '4000px' }}
                            />
                          </div>
                        ))}
                      {/* <div className="carousel-item active">
                        <img
                          src={slide01}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={slide02}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={slide03}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div> */}
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div className="col-md-3 mt-3 w-100">
                  <p className="text-center h4">{car.name}</p>
                  <div className="row flex justify-center pl-4">
                    <div className="col-6 p-0">
                      <p className="text-left">{t('Рік випуску')}:</p>
                    </div>
                    <div className="col-6 p-0">
                      <p className="text-left" style={{ color: 'red' }}>
                        {car.year_production}
                      </p>
                    </div>
                  </div>

                  <div className="row flex justify-center pl-4">
                    <div className="col-6 p-0">
                      <p className="text-left">{t('Привід')}: </p>
                    </div>
                    <div className="col-6 p-0">
                      <p className="text-left" style={{ color: 'red' }}>
                        {car.drive}
                      </p>
                    </div>
                  </div>
                  <div className="row flex justify-center pl-4">
                    <div className="col-6 p-0">
                      <p className="text-left">{t('Пробіг')}:</p>
                    </div>
                    <div className="col-6 p-0">
                      <p className="text-left" style={{ color: 'red' }}>
                        {car.mileage}
                      </p>
                    </div>
                  </div>
                  <div className="row flex justify-center pl-4">
                    <div className="col-6 p-0">
                      <p className="text-left">{t('Двигун')}:</p>
                    </div>
                    <div className="col-6 p-0 d-flex align-items-center">
                      <p className="text-left" style={{ color: 'red' }}>
                        {car.engine}
                      </p>
                    </div>
                  </div>
                  <div className="row flex justify-center pl-4">
                    <div className="col-6 p-0">
                      <p className="text-left">{t('Трансмісія')}:</p>
                    </div>
                    <div className="col-6 p-0 d-flex align-items-center">
                      <p className="text-left" style={{ color: 'red' }}>
                        {car.transmission}
                      </p>
                    </div>
                  </div>

                  <div className="row flex justify-center pl-4">
                    <div className="col-6 p-0">
                      <p className="text-left">{t('Кондиціонер')}:</p>
                    </div>
                    <div className="col-6 p-0 d-flex align-items-center">
                      {car.conditioner === '1' ? (
                        <img
                          className="text-left"
                          width="20"
                          height="20"
                          src={v}
                          alt=""
                        />
                      ) : (
                        <img
                          className="text-left"
                          width="20"
                          height="20"
                          src={x}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                  <div className="row flex justify-center pl-4">
                    <div className="col-6 p-0">
                      <p className="text-left">{t('Аудіо-система')}:</p>
                    </div>
                    <div className="col-6 p-0">
                      {car.audio_system === '1' ? (
                        <img width="20" height="20" src={v} alt="" />
                      ) : (
                        <img width="20" height="20" src={x} alt="" />
                      )}
                    </div>
                  </div>

                  <div className="row flex justify-center pl-4">
                    <div className="col-6 p-0">
                      <p className="text-left">{t('Сигналізація')}:</p>
                    </div>
                    <div className="col-6 p-0 d-flex align-items-center">
                      {car.alarm === '1' ? (
                        <img width="20" height="20" src={v} alt="" />
                      ) : (
                        <img width="20" height="20" src={x} alt="" />
                      )}
                    </div>
                  </div>

                  <div className="row flex justify-center pl-4">
                    <div className="col-6 p-0">
                      <p className="text-left">{t('Колір')}:</p>
                    </div>
                    <div className="col-6 p-0 align-items-center">
                      <p className="text-left" style={{ color: 'red' }}>
                        {car.color}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mt-3 bg-light">
                  <div className="row flex justify-center pl-md-1 pr-md-1 pl-4">
                    <div className="col-6 p-0">
                      <p className="text-left">{t('Ціна авто')}:</p>
                    </div>
                    <div className="col-6 p-0 d-flex align-items-center">
                      <p className="text-left" style={{ color: 'red' }}>
                        {car.price_car}
                      </p>
                    </div>
                  </div>

                  <div className="row flex justify-center pl-md-1 pr-md-1 pl-4">
                    <div className="col-6 p-0">
                      <p className="text-left">{t('Завдаток')}:</p>
                    </div>
                    <div className="col-6 p-0 align-items-center">
                      <p className="text-left" style={{ color: 'red' }}>
                        {car.deposit}
                      </p>
                    </div>
                  </div>

                  <hr />
                  <div className="row flex justify-center pl-md-1 pr-md-1 pl-4">
                    <div className="col-6 p-0">
                      <p style={{ lineHeight: '1.1' }} className="text-left">
                        {t('Повна вартість оренди')}:
                      </p>
                    </div>
                    <div className="col-6 p-0 d-flex align-items-center">
                      <p className="text-left" style={{ color: 'red' }}>
                        {car.full_cost_rent}
                      </p>
                    </div>
                  </div>
                  <div className="row flex justify-center pl-md-1 pr-md-1 pl-4 mt-2">
                    <div className="col-6 p-0">
                      <p style={{ lineHeight: '1.1' }} className="text-left">
                        {t('Оплата вартості авто')}:
                      </p>
                    </div>
                    <div className="col-6 p-0 d-flex align-items-center">
                      <p className="text-left" style={{ color: 'red' }}>
                        {car.payment_cost_car}
                      </p>
                    </div>
                  </div>
                  <div className="row flex justify-center pl-md-1 pr-md-1 pl-4 mt-2">
                    <div className="col-6 p-0">
                      <p style={{ lineHeight: '1.1' }} className="text-left">
                        {t('Вартість оренди з правом викупу')}:
                      </p>
                    </div>
                    <div className="col-6 p-0 d-flex align-items-center">
                      <p
                        className="text-left"
                        className
                        style={{ color: 'red' }}
                      >
                        {car.price_with_right_redemption}
                      </p>
                    </div>
                  </div>

                  <hr />

                  <div className="row flex justify-center pl-md-1 pr-md-1 pl-4">
                    <div className="col-6 p-0">
                      <p className="text-left">{t('Повна вартість')}:</p>
                    </div>
                    <div className="col-6 p-0 d-flex align-items-center">
                      <p className="text-left" style={{ color: 'red' }}>
                        {car.full_price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row justify-content-center mt-3 mb-3 p-0">
              <div className="col-md-6">
                <button className="btn_main">Придбати</button>
              </div>
            </div> */}
            </div>
          </div>
        ))}
        {/* новий автовикуп */}
        {isLoading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" />
          </div>
        )}
        {error && !isLoading && 'Error!'}

        {seoSale.length > 0 && !isLoading && !error && seoSale.length !== 0 && (
          <>
            <h3 className="text-center mb-3">{seoSale[0].title}</h3>
            <div className="row mb-3">
              <div className="col-md-12">
                <div
                  dangerouslySetInnerHTML={{ __html: seoSale[0].content }}
                ></div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
