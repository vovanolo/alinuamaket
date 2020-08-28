import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../styles/assistance.css";

import first from "../images/assistance/first.svg";
import second from "../images/assistance/second.svg";
import third from "../images/assistance/third.svg";
import fourth from "../images/assistance/fourth.svg";
import fifth from "../images/assistance/fifth.svg";
import sixth from "../images/assistance/sixth.svg";
import car from "../images/assistance/car.png";
import last from "../images/assistance/last.png";

export default function Assistance() {
    const [language, setLanguage] = useState("ua");
    const { t, i18n } = useTranslation();

    useEffect(() => {
        changeLanguage(localStorage.getItem("lang") || "ua");
    }, [language]);

    function changeLanguage(newLanguage) {
        const newLang = newLanguage;
        localStorage.setItem("lang", newLang);
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
    }

    return (
        <div className="assistance">
            <div className="bg_absolute" />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-4">
                        <div className="head_text">
                            <h2 className="mb-3">Послуга «Alin Assistance»</h2>
                            <p>
                                Багато справ, безліч дзвінків, важливі зустрічі,
                                серйозні переговори? У величезному списку
                                буденних справ, зовсім немає часу для свого
                                чотирьох колісного залізного друга? Адже він теж
                                потребує уваги. Ми прагнемо аби ваше життя було
                                комфортним, аби ви мали можливість займатись
                                улюбленими справами, саме тому ми розробили
                                унікальну програму з обслуговування клієнтів :
                                «персональний сервіс консультант «Alin
                                Assistance».
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row offset_top">
                    <div className="col">
                        <h3 className="text_grey">Що входить?</h3>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col">
                        <h2>Особливі послуги</h2>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-4">
                        <div className="row mt-2 d-flex align-items-center">
                            <div className="col-md-3">
                                <img src={first} alt="" />
                            </div>
                            <div className="col-md-9">
                                <span style={{ textAlign: "center" }}>
                                    Запис авто на ремонт чи проведення
                                    техобслуговування
                                </span>
                            </div>
                        </div>
                        <div className="row mt-5 d-flex align-items-center">
                            <div className="col-md-3">
                                <img src={second} alt="" />
                            </div>
                            <div className="col-md-9">
                                <span style={{ textAlign: "center" }}>
                                    Страхування авто
                                </span>
                            </div>
                        </div>
                        <div className="row mt-5 d-flex align-items-center">
                            <div className="col-md-3">
                                <img src={third} alt="" />
                            </div>
                            <div className="col-md-9">
                                <span style={{ textAlign: "center" }}>
                                    Замовлення евакуатора
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row mt-2 d-flex align-items-center">
                            <div className="col-md-3">
                                <img src={fourth} alt="" />
                            </div>
                            <div className="col-md-9">
                                <span style={{ textAlign: "center" }}>
                                    Запис авто на ремонт чи проведення
                                    техобслуговування
                                </span>
                            </div>
                        </div>
                        <div className="row mt-5 d-flex align-items-center">
                            <div className="col-md-3">
                                <img src={fifth} alt="" />
                            </div>
                            <div className="col-md-9">
                                <span style={{ textAlign: "center" }}>
                                    Страхування авто
                                </span>
                            </div>
                        </div>
                        <div className="row mt-5 d-flex align-items-center">
                            <div className="col-md-3">
                                <img src={sixth} alt="" />
                            </div>
                            <div className="col-md-9">
                                <span style={{ textAlign: "center" }}>
                                    Замовлення евакуатора
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <img src={car} alt="" />
                    </div>
                </div>
                <div className="top_top row mt-5 d-flex justify-content-between">
                    <div className="col-md-7">
                        <img className='w-100' src={last} alt=""/>
                    </div>
                    <div className="col-md-5">
                        <p className='mt-5'>Основний принцип роботи компанії – не просто обслуговування автомобілів, а результат та вдячні постійні клієнти! Саме завдяки їй ви зможете зекономити свій час та нерви. Забудьте про безмежні черги та століття втраченого часу.</p>
                        <p className='mt-4'>Програма надає вам можливість вирішити всі технічні питання не виходячи з дому чи офісу. Лише один дзвінок і ось персональний сервіс консультант вирушає вам на допомогу.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
