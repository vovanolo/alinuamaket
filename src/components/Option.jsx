import React from 'react';
import { useField } from 'formik';

import '../styles/option.css';
import { useEffect } from 'react';

export default function Option({ id, text, onCheck, onClick, ...otherProps }) {
  const [field] = useField(otherProps);

  useEffect(() => {
    const { value } = field;

    onCheck(value);
  }, [field]);

  return (
    <div className="col mb-4">
      <div className="option">
        <div className="option__checkbox-container">
          <input
            {...field}
            {...otherProps}
            onClick={onClick}
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
          {text}
        </label>
      </div>
    </div>
  );
}
