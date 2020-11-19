import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { fetchCarsData } from '../utils/fetchCarsData';
import { fetchCategoriesData } from '../utils/fetchCategoriesData';
import { fetchSeoLviv } from '../utils/fetchSeoLviv';

import { useParams } from 'react-router-dom';

import '../styles/rent_page.css';

import car from '../images/slider/01_Car.png';

import CarCard from '../components/CarCard';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Rent() {
  const [language, setLanguage] = useState('ua');
  const [cars, setCars] = useState([]);
  const [seoRent, setSeoRent] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentSorter, setCurrentSorter] = useState('');

  const { t, i18n } = useTranslation();
  const params = useParams();

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || 'ua');
    fetchCategoriesData(localStorage.getItem('lang'))
      .then((res) => setCategories(res))
      .catch((err) => console.dir(err));
  }, [language]);

  useEffect(() => {
    fetchCarsData()
      .then((res) => setCars(res))
      .catch((err) => console.dir(err));
    // if(params.city === )

    // if (params.context.location.pathname === 'rent/lviv') {
    // window.location.reload();
    //   fetchSeoLviv(localStorage.getItem('lang'))
    //     .then((res) => setSeoRent(res))
    //     .catch((err) => console.dir(err));
    // }
  }, []);
  useEffect(() => {
    // window.location.reload();
  }, [params.city]);

  function changeLanguage(newLanguage) {
    const newLang = newLanguage;
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }
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
              Filter By...
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
        {seoRent && (
          <div>
            <h3 className="text-center mt-4">{seoRent.title}</h3>
            <div
              className="mt-3 mb-5"
              dangerouslySetInnerHTML={{ __html: seoRent.content_html }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}
