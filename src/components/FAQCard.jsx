import React from 'react';
import { useState } from 'react';

import plus from '../images/plus.svg';
import minus from '../images/minus.svg';

export default function FAQCard({ id, title, description }) {
  const [visible, setVisible] = useState(false);

  const toggleCollapse = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="card card_border">
      <div className={`card-header mt-4 ${visible ? 'card_back' : ''}`} id={id}>
        <h2 className="mb-0">
          <button
            // id="myCollapsible"
            className="btn btn-block text-left d-flex justify-content-between align-items-center card_height"
            type="button"
            data-toggle="collapse"
            data-target={`#${id}`}
            aria-expanded={visible}
            aria-controls={id}
            onClick={toggleCollapse}
          >
            <p className="text">{title}</p>
            <img
              src={visible ? minus : plus}
              alt="Expand icon"
              className="d-block"
            />
          </button>
        </h2>
      </div>
      <div
        id={id}
        className="collapse"
        aria-labelledby={id}
        data-parent="#faqAccordion"
      >
        <div className="card-body">{description}</div>
      </div>
    </div>
  );
}
