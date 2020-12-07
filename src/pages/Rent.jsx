import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCarsData } from '../utils/fetchCarsData';
import { fetchCategoriesData } from '../utils/fetchCategoriesData';
import { fetchCitySeo } from '../utils/fetchCitySeo';

import { useTranslate } from '../hooks/useTranslate';

import '../styles/rent_page.css';

import CarCard from '../components/CarCard';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Rent() {
  const [cars, setCars] = useState([]);
  const [carsLoading, setCarsLoading] = useState(false);
  const [cityInfo, setCityInfo] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentSorter, setCurrentSorter] = useState('');

  const { t, i18n } = useTranslate();
  const params = useParams();

  useEffect(() => {
    setCategoriesLoading(true);

    fetchCategoriesData(i18n.language)
      .then((res) => setCategories(res))
      .catch((err) => console.dir(err))
      .finally(() => setCategoriesLoading(false));
  }, [i18n.language]);

  useEffect(() => {
    setCityInfo(null);

    if (params.city) {
      fetchCitySeo(params.city, i18n.language)
        .then((res) => {
          setCars(res.cars);
          setCityInfo(res.citi);
        })
        .catch((err) => console.dir(err));
    } else {
      setCarsLoading(true);
      fetchCarsData()
        .then((res) => setCars(res))
        .catch((err) => console.dir(err))
        .finally(() => setCarsLoading(false));
    }
  }, [params, i18n.language]);

  const Sorters = {
    priceAsc: t('За зростанням ціни'),
    priceDesc: t('За спаданням ціни'),
  };
  const sortersData = Object.values(Sorters);

  function changeFilter(e) {
    const value = e.target.value === 'all' ? null : e.target.value;

    setCurrentCategory(value);
  }

  function changeSorter(e) {
    const { value } = e.target;

    setCurrentSorter(value);
  }

  const filteredCars = !currentCategory
    ? cars
    : cars.filter(({ category_id }) => category_id === currentCategory);

  const sortedCars = filteredCars.sort((a, b) => {
    switch (currentSorter) {
      case Sorters.priceAsc:
        return Number(a.deposit) - Number(b.deposit);

      case Sorters.priceDesc:
        return Number(b.deposit) - Number(a.deposit);

      default:
        return filteredCars;
    }
  });

  if (carsLoading || categoriesLoading) {
    return (
      <div className="navbar-offset">
        <div className="container">
          <div className="row">
            <div className="col">
              <Breadcrumbs active="rent" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="d-flex justify-content-center">
                <div
                  className="spinner-border"
                  style={{
                    width: '3rem',
                    height: '3rem',
                    margin: '50px 0',
                  }}
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar-offset">
        <div className="container">
          <div className="row">
            <div className="col">
              <Breadcrumbs active="rent" />
            </div>
          </div>
          <div className="row car_nav_diseapear">
            <div className="col-lg-9">
              <button
                type="button"
                className="btn_main btn_slim rent__filter-collapse-btn"
                data-toggle="collapse"
                data-target="#rentFilterCollapse"
              >
                {t('Клас авто')}
              </button>
              <div
                className="collapse collapse rent__filter-container"
                id="rentFilterCollapse"
              >
                <form className="rent-nav__filters">
                  <input
                    id="dawdsa;kfja;wj;d1"
                    type="radio"
                    className="visually-hidden rent-nav__filter-radio"
                    value="all"
                    checked={!currentCategory}
                    onChange={changeFilter}
                  />
                  <label
                    className="rent-nav__filter-item"
                    htmlFor="dawdsa;kfja;wj;d1"
                  >
                    {t('Всі')}
                  </label>
                  <span>/</span>
                  {categories.map(({ name, id }) => (
                    <React.Fragment key={name}>
                      <input
                        id={name}
                        type="radio"
                        className="visually-hidden rent-nav__filter-radio"
                        value={id}
                        checked={currentCategory === id}
                        onChange={changeFilter}
                      />
                      <label className="rent-nav__filter-item" htmlFor={name}>
                        {t(name)}
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
              ({
                id,
                name,
                year,
                count,
                conditioner,
                price,
                deposit,
                photo,
                slug,
              }) => (
                <CarCard
                  key={id}
                  name={name}
                  year={year}
                  placesCount={count}
                  air={conditioner}
                  price={price}
                  deposit={deposit}
                  dayPrice={Math.round(price / 31)}
                  photoUrl={photo}
                  slug={slug}
                  city={params.city}
                />
              )
            )}
          </div>
          {cityInfo && (
            <div>
              <h1 className="text-center mt-4">{cityInfo.title}</h1>
              <div
                className="mt-3 mb-5"
                dangerouslySetInnerHTML={{ __html: cityInfo.seo_text }}
              ></div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
