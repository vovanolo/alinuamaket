import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/rent_page.css';

import car from '../images/slider/01_Car.png';

import CarCard from '../components/CarCard';

const Filters = {
  all: 'Всі автомобілі',
  premium: 'Преміум',
  suv: 'Позашляховик',
  cabriolet: 'Кабріолет',
  confort: 'Конфорт',
  cheap: 'Економ',
};

const Sorters = {
  priceAsc: 'За зростанням ціни',
  priceDesc: 'За спаданням ціни',
};

const CardData = [
  {
    id: 1,
    name: 'BMW S SERIES SEDAN',
    year: '2018',
    placesCount: '5 місць',
    air: 'кондиціонер',
    price: 100,
    photo: car,
    type: Filters.cabriolet,
  },
  {
    id: 2,
    name: 'BMW S SERIES SEDAN',
    year: '2018',
    placesCount: '5 місць',
    air: 'кондиціонер',
    price: 350,
    photo: car,
    type: Filters.cheap,
  },
  {
    id: 3,
    name: 'BMW S SERIES SEDAN',
    year: '2018',
    placesCount: '5 місць',
    air: 'кондиціонер',
    price: 450,
    photo: car,
    type: Filters.suv,
  },
  {
    id: 4,
    name: 'BMW S SERIES SEDAN',
    year: '2018',
    placesCount: '5 місць',
    air: 'кондиціонер',
    price: 100,
    photo: car,
    type: Filters.cheap,
  },
  {
    id: 5,
    name: 'BMW S SERIES SEDAN',
    year: '2018',
    placesCount: '5 місць',
    air: 'кондиціонер',
    price: 19235,
    photo: car,
    type: Filters.cheap,
  },
];

export default function Rent() {
  const [language, setLanguage] = useState('ua');
  const [cars, setCars] = useState([]);
  const [currentFilter, setCurrentFilter] = useState(Filters.all);
  const [currentSorter, setCurrentSorter] = useState('');

  const { t, i18n } = useTranslation();

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
  }, [language]);

  useEffect(() => {
    setCars(CardData);
  }, []);

  function changeLanguage(newLanguage) {
    const newLang = newLanguage;
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }

  const filtersData = Object.values(Filters);
  const sortersData = Object.values(Sorters);

  function changeFilter(e) {
    const { value } = e.target;

    setCurrentFilter(value);
  }

  function changeSorter(e) {
    const { value } = e.target;

    setCurrentSorter(value);
  }

  const filteredCars =
    currentFilter === Filters.all
      ? cars
      : cars.filter(({ type }) => type === currentFilter);

  const sortedCars = filteredCars.sort((a, b) => {
    switch (currentSorter) {
      case Sorters.priceAsc:
        return a.price - b.price;

      case Sorters.priceDesc:
        return b.price - a.price;

      default:
        return filteredCars;
    }
  });

  return (
    <div className="rent_page">
      <div className="container">
        <div className="row car_nav_diseapear">
          <div className="col-lg-9">
            <button
              type="button"
              className="btn_main btn_slim rent__filter-collapse-btn"
              data-toggle="collapse"
              data-target="#rentFilterCollapse"
            >
              Filter By...
            </button>
            <div
              className="collapse collapse rent__filter-container"
              id="rentFilterCollapse"
            >
              <form className="rent-nav__filters">
                {filtersData.map((filter) => (
                  <React.Fragment key={filter}>
                    <input
                      id={filter}
                      type="radio"
                      className="visually-hidden rent-nav__filter-radio"
                      value={filter}
                      checked={currentFilter === filter}
                      onChange={changeFilter}
                    />
                    <label className="rent-nav__filter-item" htmlFor={filter}>
                      {t(filter)}
                    </label>
                    <span>/</span>
                  </React.Fragment>
                ))}
              </form>
            </div>
          </div>
          <div className="col-lg-3">
            <select
              className="input rent__sort-select this_select"
              value={currentSorter}
              onChange={changeSorter}
            >
              <option value="" disabled>
                {t('Сортувати за')}
              </option>
              {sortersData.map((sorter) => (
                <option key={sorter} value={sorter}>
                  {t(sorter)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 mt-4">
          {sortedCars.map(
            ({ id, name, year, placesCount, air, price, photo }) => (
              <CarCard
                key={id}
                name={name}
                year={year}
                placesCount={placesCount}
                air={air}
                price={price}
                dayPrice={Math.round(price / 31)}
                photo={photo}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
