import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../styles/contacts.css";

import map from "../images/map-pin.svg";
import darkmail from "../images/darkmail.svg";
import phone from "../images/phone.svg";

export default function Contacts() {
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
        <div className="contacts">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Контакти</h2>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text_grey">Львів</p>
                                <div className="mt-3">
                                    <img src={map} alt="" />
                                    <span className="ml-2">
                                        вул. Любінська 196
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <img src={darkmail} alt="" />
                                    <span className="ml-2">
                                        alin.lviv@gmail.com
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <img src={phone} alt="" />
                                    <span className="ml-2">
                                        +38 098 777 16 00
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <p className="text_grey">Київ</p>
                                <div className="mt-3">
                                    <img src={map} alt="" />
                                    <span className="ml-2">
                                        вул. Любінська 196
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <img src={darkmail} alt="" />
                                    <span className="ml-2">
                                        alin.lviv@gmail.com
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <img src={phone} alt="" />
                                    <span className="ml-2">
                                        +38 098 777 16 00
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <p className="text_grey">Львів</p>
                                <div className="mt-3">
                                    <img src={map} alt="" />
                                    <span className="ml-2">
                                        вул. Любінська 196
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <img src={darkmail} alt="" />
                                    <span className="ml-2">
                                        alin.lviv@gmail.com
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <img src={phone} alt="" />
                                    <span className="ml-2">
                                        +38 098 777 16 00
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <p className="text_grey">Львів</p>
                                <div className="mt-3">
                                    <img src={map} alt="" />
                                    <span className="ml-2">
                                        вул. Любінська 196
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <img src={darkmail} alt="" />
                                    <span className="ml-2">
                                        alin.lviv@gmail.com
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <img src={phone} alt="" />
                                    <span className="ml-2">
                                        +38 098 777 16 00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1296.5608658575609!2d23.959709706541158!3d49.81490518871833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae75d4ae39b99%3A0xaf9110949f3614b6!2zQWxpbiAtINCe0YDQtdC90LTQsCDQsNCy0YLQviDRgtCwINC_0LDRgdCw0LbQuNGA0YHRjNC60ZYg0L_QtdGA0LXQstC10LfQtdC90L3Rjw!5e0!3m2!1sru!2sua!4v1598553528433!5m2!1sru!2sua"
                            width="600"
                            height="450"
                            frameborder="0"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            aria-hidden="false"
                            tabindex="0"
                        ></iframe>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6 mt-5">
                        <h3 className='text_grey'>Є запитання?</h3>
                        <p className='mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Dolor quisque est a, morbi lectus at. Pellentesque eget aenean 
                        mattis ullamcorper laoreet et. At sem elit felis a egestas. 
                        Ullamcorper eget purus aenean vel convallis arcu, euismod. 
                        Semper a, ultrices non nulla. Turpis phasellus neque quis sit tristique. Non 
                        iaculis tellus suscipit mauris vitae.
                        </p>
                    </div>
                    <div className="col-md-6 input input_size">
                        <h3>Зв'язатись з нами</h3>
                        <input type="text" placeholder='Ваше імя' className='input mt-2'/>
                        <input type="text" placeholder='Ваш email' className='input mt-2'/>
                        <textarea className='input mt-2' placeholder='Коментар'></textarea>
                        
                        <div className="row mt-2">
                            <div className="col-md-4 ">
                                <button className='btn_main'>Надіслати</button>
                            </div>
                        </div>
                        

                    </div>


                </div>


            </div>
        </div>
    );
}
