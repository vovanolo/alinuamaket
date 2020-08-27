import React from "react";

import "../styles/car_card.css";

import car from "../images/sonata.png";

export default function CarCard({ card_head, year, number, air, price, dayPrice, photo }) {
    return (
        <div>
            <div className="col mb-4">
                <div className="card">
                    <img src={photo} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">{card_head}</h5>
                        <p className="card-text">{year}</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div>
                                    {/* <img src="./images/Vector.png" alt="places" /> */}
                                    <span>{number}</span>
                                </div>
                                
                                <div>
                                    {/* <img src="./images/Vector (1).png" alt="konduk" /> */}
                                    <span>{air}</span>
                                </div>

                                <div>
                                    {/* <img src="./images/Vector (2).png" alt="price" /> */}
                                    <span>{price}</span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <span className="text_button">
                                    {dayPrice}€ / в день
                                </span>
                                <button type="button" className="btn_main">
                                    Детальніше
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
