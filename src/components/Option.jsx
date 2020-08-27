import React from 'react';

import '../styles/option.css';

export default function Option({ id, text }) {
  return (
    <div className="col mb-4">
      <div className="option">
        <div className="option__checkbox-container">
          <input type="checkbox" className="option__checkbox" id={`optionsCheckbox${id}`} />
          <label htmlFor={`optionsCheckbox${id}`} className="option__checkbox-label" />
        </div>
        <p className="option__text">{text}</p>
      </div>
    </div>
  );
}
