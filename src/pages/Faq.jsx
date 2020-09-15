import React, { useState, useRef } from "react";



import '../styles/faq.css';
import plus from '../images/plus.svg';
import minus from '../images/minus.svg';


import $ from 'jquery';





export default function Faq() {
    const [counter, setCounter] = useState(0);
    const card = useRef();
    const img = useRef();
    // let soRef = null;


   

    function changeCollapse(e) {
        e.preventDefault();
        if(counter === 0){
            card.current.className = 'card-header mt-4 card_back';
            img.current.src = minus;
            setCounter(1);
        }else if (counter === 1) {
            card.current.className = 'card-header mt-4';
            img.current.src = plus;
            setCounter(0);
        }
        
    };


    return (
        <div className="faq_section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>FAQ</h2>
                    </div>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="card card_border " >
                        <div className="card-header mt-4 " id="headingOne" ref={card}>
                            <h2 className="mb-0">
                                <button
                                    id='myCollapsible'
                                    className="btn btn-block text-left d-flex justify-content-between align-items-center card_height"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="false"
                                    aria-controls="collapseOne"
                                    onClick={changeCollapse}
                                >
                                    <p className="text">
                                        Collapsible Group Item #1
                                    </p>
                                    <img ref={img} src={plus} className="d-block" />
                                </button>
                            </h2>
                        </div>
                        <div
                            id="collapseOne"
                            className="collapse"
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
                        <div className="card-header mt-4" id="headingTwo" ref={card}>
                            <h2 className="mb-0">
                                <button
                                    className="btn btn-block text-left collapsed d-flex justify-content-between align-items-center"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                    onClick={changeCollapse}
                                >
                                    <p className="text">
                                        Collapsible Group Item #2
                                    </p>
                                    <img ref={img} src={plus} className="d-block" />
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
                                    onClick={changeCollapse}
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
