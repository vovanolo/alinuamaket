import React from 'react';

import '../styles/option.css';

export default function Option({ id, label, ...props }) {
  return (
    <div className="col mb-4">
      <div className="option">
        <div className="option__checkbox-container">
          <input
            {...props}
            type="checkbox"
            className="option__checkbox"
            id={`optionsCheckbox${id}`}
          />
          <label
            htmlFor={`optionsCheckbox${id}`}
            className="option__checkbox-label"
          />
        </div>
        <label htmlFor={`optionsCheckbox${id}`} className="option__text">
          {label}
        </label>
      </div>
    </div>
  );
}
