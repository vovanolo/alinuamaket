import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { Combobox } from 'react-widgets';

import * as urls from '../urls';
import { fetchCarData } from '../utils/fetchCarData';
import { fetchRentInfo } from '../utils/fetchRentInfo';
import { fetchAllCities } from '../utils/fetchAllCities';

import '../styles/reserv.css';
import '../styles/switch.css';

import circleSwitch from '../images/circle_switch.svg';

import Option from '../components/Option';
import OptionRadio from '../components/OptionRadio';
import { FormContext } from '../components/ContextProvider';
import Breadcrumbs from '../components/Breadcrumbs';
import PriceFixed from '../components/PriceFixed';

const initialDateFormatted = `${new Date().getFullYear()}-${
  new Date().getMonth().toString().length < 2
    ? '0' + (new Date().getMonth() + 1).toString()
    : new Date().getMonth() + 1
}-${
  new Date().getDate().toString().length < 2
    ? '0' + new Date().getDate()
    : new Date().getDate()
}`;

const initialTimeFormatted = `${new Date().getHours()}:${new Date().getMinutes()}`;

export default function Reserv() {
  const [language, setLanguage] = useState('ua');
  const [price, setPrice] = useState(120);
  const [allPrices, setAllPrices] = useState([]);
  const [allDeposits, setAllDeposits] = useState([]);
  const [rentDays, setRentDays] = useState(1);
  const [extras, setExtras] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [carLoading, setCarLoading] = useState(false);
  const [pledgeValue, setPledgeValue] = useState(0);
  const [cities, setCities] = useState([]);
  const [citiesLoading, setCitiesLoading] = useState(false);
  const [fuelDeposit, setFuelDeposit] = useState(0);
  const [deposit, setDeposit] = useState(0);

  const { t, i18n } = useTranslation();
  const location = useLocation();
  const history = useHistory();
  const { slug } = useParams();
  const [data, setData] = useContext(FormContext);

  const ExtrasType = {
    perDay: t('Доба'),
    onetime: t('Одноразово'),
  };

  const extrasValues = [
    {
      id: 1,
      price: 5,
      displayPrice: 5,
      type: ExtrasType.perDay,
      value: t('Зарядне/тримач для тел'),
    },
    {
      id: 2,
      price: 10,
      displayPrice: 10,
      type: ExtrasType.onetime,
      value: t('Додатковий водій'),
    },
    {
      id: 3,
      price: 5,
      displayPrice: 5,
      type: ExtrasType.perDay,
      value: t('GPS навігація'),
    },
    {
      id: 4,
      price: 5,
      displayPrice: 5,
      type: ExtrasType.perDay,
      value: t('Дитяче крісло'),
    },
    {
      id: 5,
      price: 15,
      displayPrice: 15,
      type: ExtrasType.onetime,
      value: t('Антибукс зимовий'),
    },
    {
      id: 6,
      price: 10,
      displayPrice: 10,
      type: ExtrasType.perDay,
      value: t('Електросамокат'),
    },
    {
      id: 7,
      price: 5,
      displayPrice: 5,
      type: ExtrasType.perDay,
      value: t('Wi-Fi роутер'),
    },
    {
      id: 8,
      price: 5,
      displayPrice: 5,
      type: ExtrasType.onetime,
      value: t('Sim-карта'),
    },
  ];

  const day = t('day');
  const days = t('days');

  const validationSchema = Yup.object().shape({
    locationFrom: Yup.string()
      .min(2, t('Location must at least 2 characters long'))
      .required(t('Location From is a required field')),
    receiveDate: Yup.string().min(2).required(),
    receiveTime: Yup.string().min(2).required(),
    returnDate: Yup.string().min(2).required(),
    returnTime: Yup.string().min(2).required(),
    extras: Yup.array(),
    name: Yup.string().min(2).required(),
    phone: Yup.string().min(10).required(),
    email: Yup.string().email().required(),
    comment: Yup.string().min(5),
    agreeWithTerms: Yup.bool(),
    pledge: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      locationFrom: '',
      locationTo: '',
      receiveDate: initialDateFormatted,
      receiveTime: initialTimeFormatted,
      returnDate: initialDateFormatted,
      returnTime: initialTimeFormatted,
      extras: [],
      name: '',
      phone: '',
      email: '',
      comment: '',
      agreeWithTerms: false,
      pledge: 300,
      ...data,
    },
    validationSchema: validationSchema,
    onSubmit: handleFormSubmit,
  });

  useEffect(() => {
    setCarLoading(true);

    fetchCarData(slug)
      .then((res) => {
        setSelectedCar(res);

        setAllPrices([
          res.price[4].money,
          res.price[3].money,
          res.price[2].money,
          res.price[1].money,
        ]);

        setAllDeposits([
          res.price[4].money_deposit,
          res.price[3].money_deposit,
          res.price[2].money_deposit,
          res.price[1].money_deposit,
        ]);
      })
      .finally(() => setCarLoading(false));
  }, []);

  useEffect(() => {
    if (allPrices.length > 0) {
      if (rentDays >= 1 && rentDays <= 2) {
        setPrice((allPrices[0] + Number(pledgeValue)) * rentDays);
      } else if (rentDays >= 3 && rentDays <= 7) {
        setPrice((allPrices[1] + Number(pledgeValue)) * rentDays);
      } else if (rentDays >= 8 && rentDays <= 29) {
        setPrice((allPrices[2] + Number(pledgeValue)) * rentDays);
      } else if (rentDays >= 30) {
        setPrice((allPrices[3] + Number(pledgeValue)) * rentDays);
      }
    }
  }, [allPrices]);

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
    setCitiesLoading(true);
    fetchAllCities(language)
      .then((res) => setCities(res))
      .finally(() => setCitiesLoading(false));
  }, [language]);

  useEffect(() => {
    const { receiveDate, returnDate, receiveTime, returnTime } = formik.values;

    const receiveTimeHours = new Date(
      new Date().setHours(receiveTime.split(':')[0])
    ).getHours();
    const returnTimeHours = new Date(
      new Date().setHours(returnTime.split(':')[0])
    ).getHours();

    if (!(receiveDate && returnDate)) return;

    const newRentDays =
      new Date(returnDate).getTime() - new Date(receiveDate).getTime();

    handleExtrasPriceSet();

    let days =
      newRentDays / (1000 * 3600 * 24) < 1
        ? 1
        : newRentDays / (1000 * 3600 * 24);

    if (returnTimeHours > receiveTimeHours && receiveDate !== returnDate) {
      days += 1;
    }

    setRentDays(days);
  }, [formik.values]);

  useEffect(() => {
    if (formik.values.pledge != 0) {
      setPledgeValue(0);
      setDeposit(0);

      if (selectedCar) {
        setFuelDeposit(Number(selectedCar.fuel_deposit));
      }
    } else {
      setFuelDeposit(0);

      if (selectedCar) {
        setDeposit(Number(selectedCar.deposit));
      }

      if (rentDays >= 1 && rentDays <= 2) {
        setPledgeValue(Number(allDeposits[0]));
      } else if (rentDays >= 3 && rentDays <= 7) {
        setPledgeValue(Number(allDeposits[1]));
      } else if (rentDays >= 8 && rentDays <= 29) {
        setPledgeValue(Number(allDeposits[2]));
      } else if (rentDays >= 30) {
        setPledgeValue(Number(allDeposits[3]));
      }
    }
  }, [formik.values.pledge]);

  useEffect(() => {
    handleExtrasPriceSet();
  }, [rentDays]);

  useEffect(() => {
    const extrasPrice = extras.reduce(
      (acc, extra) => acc + extra.displayPrice,
      0
    );

    if (allPrices.length > 0) {
      if (rentDays >= 1 && rentDays <= 2) {
        setPrice((allPrices[0] + Number(pledgeValue)) * rentDays + extrasPrice);
      } else if (rentDays >= 3 && rentDays <= 7) {
        setPrice((allPrices[1] + Number(pledgeValue)) * rentDays + extrasPrice);
      } else if (rentDays >= 8 && rentDays <= 29) {
        setPrice((allPrices[2] + Number(pledgeValue)) * rentDays + extrasPrice);
      } else if (rentDays >= 30) {
        setPrice((allPrices[3] + Number(pledgeValue)) * rentDays + extrasPrice);
      }
    }
  }, [extras]);

  function changeLanguage(newLanguage) {
    const newLang = newLanguage;
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }

  function handleLocationSwap() {
    return;
  }

  function handleDateSwap() {
    const receiveDate = formik.values.receiveDate;
    const returnDate = formik.values.returnDate;
    const receiveTime = formik.values.receiveTime;
    const returnTime = formik.values.returnTime;

    formik.setValues({
      ...formik.values,
      receiveDate: returnDate,
      returnDate: receiveDate,
      receiveTime: returnTime,
      returnTime: receiveTime,
    });
  }

  function handleExtrasPriceSet() {
    const extrasPrices = formik.values.extras.reduce((acc, value) => {
      let newValues = [];

      extrasValues.forEach((value1) => {
        if (value1.id == value) {
          const newValue = {
            ...value1,
            displayPrice:
              value1.type === ExtrasType.perDay
                ? clamp(value1.price * rentDays, 0, 40)
                : clamp(value1.price, 0, 40),
          };
          newValues = [...acc, newValue];
        }
      });

      return newValues;
    }, []);

    setExtras(extrasPrices);
  }

  function clamp(value, min, max) {
    if (value < min) {
      return min;
    } else if (value > max) {
      return max;
    } else {
      return value;
    }
  }

  function handleFormSubmit(values) {
    const requestData = {
      ...values,
      extras: extras,
      price,
      selectedCar: selectedCar.slug,
      image: selectedCar.photo.path,
      city: location.state.city,
      locationTo: values.locationFrom,
    };

    if (deposit == 0) {
      requestData.deposit = Number(selectedCar.deposit);
    } else {
      requestData.fuelDeposit = Number(selectedCar.fuel_deposit);
    }
    console.log(requestData);

    setData(requestData);
    fetchRentInfo(requestData).then((res) =>
      console.log('Server Response', res)
    );
    history.push(urls.summary);
  }

  function handleCityFromChange(value) {
    formik.setValues({
      ...formik.values,
      locationFrom: value,
    });
  }

  if (carLoading) {
    return (
      <div className="navbar-offset">
        <PriceFixed price={price} />
        <div className="container">
          <div className="row">
            <div className="col">
              <Breadcrumbs active="reserv" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2 className="text_black reserv__title">
                {t('Бронювання автомобіля')}
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3 className="text_black reserv__section-title">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <form onSubmit={formik.handleSubmit} className="navbar-offset">
        <PriceFixed price={price} />
        <div className="container">
          <div className="row">
            <div className="col">
              <Breadcrumbs active="reserv" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2 className="text_black reserv__title">
                {t('Бронювання автомобіля')}
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col">
                  <h3 className="text_black reserv__section-title">
                    {t('Налаштування бронювання')}
                  </h3>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="switch">
                    <button
                      type="button"
                      className="switch__btn"
                      onClick={handleDateSwap}
                    >
                      <img src={circleSwitch} alt="switch icon" />
                    </button>

                    <div className="switch__box">
                      <p className="switch__title text_grey">
                        {t('Отримання')}
                      </p>
                      <div className="switch__input-container">
                        <input
                          name="receiveDate"
                          type="date"
                          min={initialDateFormatted}
                          className="switch__input"
                          onChange={formik.handleChange}
                          value={formik.values.receiveDate}
                        />
                        {formik.errors.receiveDate && (
                          <span className="reserv__input-error">
                            {formik.errors.receiveDate}
                          </span>
                        )}
                        <input
                          name="receiveTime"
                          type="time"
                          min={initialTimeFormatted}
                          className="switch__input"
                          onChange={formik.handleChange}
                          value={formik.values.receiveTime}
                        />
                        {formik.errors.receiveTime && (
                          <span className="reserv__input-error">
                            {formik.errors.receiveTime}
                          </span>
                        )}
                      </div>
                      <sub className="switch__sub-title text_grey">
                        {t('дата та час')}
                      </sub>
                    </div>

                    <div className="switch__box">
                      <p className="switch__title text_grey">
                        {t('Повернення')}
                      </p>
                      <div className="switch__input-container">
                        <input
                          name="returnDate"
                          type="date"
                          min={initialDateFormatted}
                          className="switch__input"
                          onChange={formik.handleChange}
                          value={formik.values.returnDate}
                        />
                        {formik.errors.returnDate && (
                          <span className="reserv__input-error">
                            {formik.errors.returnDate}
                          </span>
                        )}
                        <input
                          name="returnTime"
                          type="time"
                          className="switch__input"
                          onChange={formik.handleChange}
                          value={formik.values.returnTime}
                        />
                        {formik.errors.returnTime && (
                          <span className="reserv__input-error">
                            {formik.errors.returnTime}
                          </span>
                        )}
                      </div>
                      <sub className="switch__sub-title text_grey">
                        {t('дата та час')}
                      </sub>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="switch">
                    <button
                      type="button"
                      className="switch__btn"
                      onClick={handleLocationSwap}
                    >
                      <img src={circleSwitch} alt="switch icon" />
                    </button>

                    <div className="switch__box">
                      <p className="switch__title text_grey">{t('від')}</p>
                      <Combobox
                        data={cities.map((city) => city.title)}
                        name="locationFrom"
                        type="text"
                        className="switch__input"
                        placeholder={t('Вкажіть локацію')}
                        onChange={handleCityFromChange}
                        value={formik.values.locationFrom}
                        busy={citiesLoading}
                      />
                      <sub className="switch__sub-title text_grey">
                        {t('місто, область, країна')}
                      </sub>
                      {formik.errors.locationFrom && (
                        <span className="reserv__input-error">
                          {formik.errors.locationFrom}
                        </span>
                      )}
                    </div>

                    <div className="switch__box">
                      <p className="switch__title text_grey">{t('до')}</p>
                      <input
                        name="locationFrom"
                        type="text"
                        className="switch__input"
                        placeholder={t('Вкажіть локацію')}
                        value={formik.values.locationFrom}
                        disabled
                      />
                      <sub className="switch__sub-title text_grey">
                        {t('місто, область, країна')}
                      </sub>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <h3 className="text_black reserv__section-title">
                    {t('Додаткові опції')}
                  </h3>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="row row-cols-md-2 row-cols-1">
                    {extrasValues.map(({ id, price, type, value }) => (
                      <Option
                        key={id}
                        id={id}
                        label={t(`${value} ${price}‎€ / ${type}`)}
                        name="extras"
                        value={id}
                        onChange={formik.handleChange}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <h3 className="text_black reserv__section-title">
                    {t('Завдаток')}
                  </h3>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="row row-cols-md-4 row-cols-1">
                    <OptionRadio
                      name="pledge"
                      value={0}
                      id="dawdsawdsawdsawdsawd1"
                      checked={formik.values.pledge == 0}
                      onChange={formik.handleChange}
                      label={t('Без завдатку')}
                    />
                    <OptionRadio
                      name="pledge"
                      value={300}
                      id="dawdsawdsawdsawdsawd2"
                      checked={formik.values.pledge == 300}
                      onChange={formik.handleChange}
                      label={t('З завдатком')}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <h3 className="text_black reserv__section-title">
                    {t('Особисті дані')}
                  </h3>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-row mb-3">
                    <div className="col">
                      <input
                        required
                        name="name"
                        className="input"
                        type="text"
                        placeholder={t('Вкажіть імя')}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                      {formik.errors.name && (
                        <span className="reserv__input-error">
                          {formik.errors.name}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-row mb-3">
                    <div className="col">
                      <input
                        required
                        name="phone"
                        className="input"
                        type="tel"
                        placeholder={t('Вкажіть телефон')}
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                      />
                      {formik.errors.phone && (
                        <span className="reserv__input-error">
                          {formik.errors.phone}
                        </span>
                      )}
                    </div>
                    <div className="col">
                      <input
                        required
                        name="email"
                        className="input"
                        type="email"
                        placeholder={t('Вкажіть email')}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      {formik.errors.email && (
                        <span className="reserv__input-error">
                          {formik.errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-row mb-3">
                    <div className="col">
                      <textarea
                        name="comment"
                        className="input"
                        placeholder={t('Коментар')}
                        onChange={formik.handleChange}
                        value={formik.values.comment}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              {selectedCar && (
                <>
                  <div className="row">
                    <div className="col">
                      <h3 className="text_black">{selectedCar.name}</h3>
                    </div>
                  </div>

                  <div className="row mt-3 mb-4">
                    <div className="col">
                      {selectedCar.photo && (
                        <img
                          className="img-responsive img-responsive_contain reserv__car-img"
                          src={selectedCar.photo.path}
                          alt={selectedCar.name}
                        />
                      )}
                    </div>
                  </div>
                </>
              )}

              <div className="row">
                <div className="col">
                  <h4 className="text_black">
                    {t('В вартість оренди включено')}:
                  </h4>
                  <ul className="reserv__price-list">
                    {extras.map(
                      ({
                        id,
                        value,
                        type,
                        price: extrasPrice,
                        displayPrice,
                      }) => (
                        <li key={id} className="reserv__price-list-item">
                          <span className="reserv__price-title">
                            {t(`${value} ${extrasPrice} / ${type}`)}
                          </span>
                          <span className="text_grey reserv__price-price">
                            +{displayPrice}€
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              {formik.values.extras.length > 0 && <hr />}

              <div className="row">
                <div className="col-lg-10">
                  <p>
                    <b>{t('від')}:</b>
                    {formik.values.receiveDate} o {formik.values.receiveTime}
                    <br />
                    {formik.values.locationFrom}
                  </p>
                  <p>
                    <b>{t('до')}:</b>
                    {formik.values.returnDate} o {formik.values.returnTime}
                    <br />
                    {formik.values.locationFrom}
                  </p>
                </div>
                <div className="col-lg-2 text-right">
                  <span>
                    <span className="rent-days">{rentDays}</span>
                    <span>
                      {rentDays.toString().endsWith(1) && rentDays !== 11
                        ? day
                        : days}
                    </span>
                  </span>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="reserv__final-price-box">
                    <p className="reserv__final-price-title">
                      {t('Ціна оренди')}:
                    </p>
                    <p className="reserv__final-price">{price}€</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label className="reserv__agreement-label">
                    <span className="reserv__agreement-text">
                      {t('Я погоджуюсь з умовами прокату')}
                    </span>
                    <input
                      name="agreeWithTerms"
                      className="reserv__agreement-checkbox"
                      type="checkbox"
                      onChange={formik.handleChange}
                      checked={formik.values.agreeWithTerms}
                    />
                  </label>
                  <Link
                    to={'/rent_conditions'}
                    target="__blank"
                    className="reserv__agreement-text"
                  >
                    {t('Ознайомитись з умовами прокату')}
                  </Link>
                </div>
              </div>

              <div className="row mt-3 mb-4">
                <div className="col-md-10">
                  <button
                    disabled={!formik.values.agreeWithTerms}
                    type="submit"
                    className="btn_main"
                  >
                    {t('Бронювати')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
