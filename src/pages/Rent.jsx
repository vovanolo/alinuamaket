import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../styles/rent_page.css';

import car from '../images/slider/01_Car.png';
import CarCard from '../components/CarCard';

export default function Rent() {
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



    const CardData = [
        {
            card_head: 'BMW S SERIES SEDAN',
            year: '2018',
            placesCount: '5 місць',
            air: 'кондиціонер',
            price: 5000,
            dayPrice: Math.round(5000 / 31),
            photo: car
        },
        {
            card_head: 'BMW S SERIES SEDAN',
            year: '2018',
            placesCount: '5 місць',
            air: 'кондиціонер',
            price: '5000€',
            dayPrice: Math.round(5000 / 31),
            photo: car
        },
        {
            card_head: 'BMW S SERIES SEDAN',
            year: '2018',
            placesCount: '5 місць',
            air: 'кондиціонер',
            price: '5000€',
            dayPrice: Math.round(5000 / 31),
            photo: car
        },
        {
            card_head: 'BMW S SERIES SEDAN',
            year: '2018',
            placesCount: '5 місць',
            air: 'кондиціонер',
            price: '5000€',
            dayPrice: Math.round(5000 / 31),
            photo: car
        },
        {
            card_head: 'BMW S SERIES SEDAN',
            year: '2018',
            placesCount: '5 місць',
            air: 'кондиціонер',
            price: '5000€',
            dayPrice: Math.round(5000 / 31),
            photo: car
        }
        
    ]


    return (
        <div className='rent_page'>
            <div className="container">
                <div className="row align-items-center car_nav_diseapear">
                    <div className="col-lg-9">
                        <div className="rent-nav__filters">
                            <Link to="/filter" className="rent-nav__filter-item text_grey">Всі автомобілі</Link>
                            <span>/</span>
                            <Link to="/filter" className="rent-nav__filter-item">Преміум</Link>
                            <span>/</span>
                            <Link to="/filter" className="rent-nav__filter-item">Позашляховик</Link>
                            <span>/</span>
                            <Link to="/filter" className="rent-nav__filter-item">Кабріолет</Link>
                            <span>/</span>
                            <Link to="/filter" className="rent-nav__filter-item">Конфорт</Link>
                            <span>/</span>
                            <Link to="/filter" className="rent-nav__filter-item">Економ</Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <select className="input">
                            <option>{t('Все')}</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>
                <div className="row align-items-center mb-4 car_nav_apear">
                    <div className="col-6">
                        <a
                            className="dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false"
                        >
                            Всі автомобілі
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Преміум</a>
                            <a className="dropdown-item" href="#">Позашляховик</a>
                            <a className="dropdown-item" href="#">Кабріолет</a>
                            <a className="dropdown-item" href="#">Конфорт</a>
                            <a className="dropdown-item" href="#">Економ</a>
                        </div>
                    </div>
                    <div className="col-6">
                        <select className="input">
                            <option>{t('Все')}</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* card */}

            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
                    {CardData.map(({ card_head, year, placesCount, air, price, dayPrice, photo }) => (
                        <CarCard
                        card_head={card_head}
                        year={year}
                        placesCount={placesCount}
                        air={air}
                        price={price}
                        dayPrice={dayPrice}
                        photo={photo}
                        />
                    ))}
                </div>
            </div>




        </div>
    )
}
