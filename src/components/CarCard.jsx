import React from "react";

import "../styles/car_card.css";

import place from '../images/Places.svg';
import wind from '../images/wind.svg';
import group from '../images/Group 388.svg';
import { Link } from "react-router-dom";

export default function CarCard({ name, year, placesCount, air, price, dayPrice, photo }) {
    return (
        <div className="col mb-4">
            <div className="row">
                <div className="col">
                    <div className="car-card__img-container">
                        <img src={photo} className="img-responsive img-responsive_cover" alt={name} />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{year}</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <div>
                                <img className="car-card__spec-icon" src={place} alt="places" />
                                <span className="car-card__spec-name">{placesCount}</span>
                            </div>
                            
                            <div>
                                <img className="car-card__spec-icon" src={wind} alt="konduk" />
                                <span className="car-card__spec-name">{air}</span>
                            </div>

                            <div>
                                <img className="car-card__spec-icon" src={group} alt="price" />
                                <span className="car-card__spec-name">{price}€</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <span className="text_button">
                                <span className="text_grey">{dayPrice}€</span> / в день
                            </span>
                            <button type="button" className="btn_main">
                                <Link to="/car_info/1">Детальніше</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
