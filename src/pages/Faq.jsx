import React from "react";


import '../styles/faq.css';
import plus from '../images/plus.svg';


export default function Faq() {
    return (
        <div className="faq_section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>FAQ</h2>
                    </div>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="card card_border">
                        <div className="card-header mt-4" id="headingOne">
                            <h2 className="mb-0">
                                <button
                                    className="btn btn-block text-left d-flex justify-content-between align-items-center"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    <p className="text">
                                        Collapsible Group Item #1
                                    </p>
                                    <img src={plus} className="d-block" />
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee
                                nulla assumenda shoreditch et. Nihil anim
                                keffiyeh helvetica, craft beer labore wes
                                anderson cred nesciunt sapiente ea proident. Ad
                                vegan excepteur butcher vice lomo. Leggings
                                occaecat craft beer farm-to-table, raw denim
                                aesthetic synth nesciunt you probably haven't
                                heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="card card_border">
                        <div className="card-header mt-4" id="headingTwo">
                            <h2 className="mb-0">
                                <button
                                    className="btn btn-block text-left collapsed d-flex justify-content-between align-items-center"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    <p className="text">
                                        Collapsible Group Item #2
                                    </p>
                                    <img src={plus} className="d-block" />
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee
                                nulla assumenda shoreditch et. Nihil anim
                                keffiyeh helvetica, craft beer labore wes
                                anderson cred nesciunt sapiente ea proident. Ad
                                vegan excepteur butcher vice lomo. Leggings
                                occaecat craft beer farm-to-table, raw denim
                                aesthetic synth nesciunt you probably haven't
                                heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="card card_border">
                        <div className="card-header mt-4" id="headingThree">
                            <h2 className="mb-0">
                                <button
                                    className="btn btn-block text-left collapsed d-flex justify-content-between align-items-center"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    <p className="text">
                                        Collapsible Group Item #3
                                    </p>
                                    <img src={plus} className="d-block" />
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordionExample"
                        >
                            <div className="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee
                                nulla assumenda shoreditch et. Nihil anim
                                keffiyeh helvetica, craft beer labore wes
                                anderson cred nesciunt sapiente ea proident. Ad
                                vegan excepteur butcher vice lomo. Leggings
                                occaecat craft beer farm-to-table, raw denim
                                aesthetic synth nesciunt you probably haven't
                                heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
