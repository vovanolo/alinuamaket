import React from 'react';

import '../styles/car_spec.css';

export default function CarSpec({ title, specs }) {
  return (
    <div className="car-spec">
      <h5 className="car-spec__title">{title}:</h5>
      <ul className="car-spec__list">
        {specs.map((spec, index) => (
          <li key={index} className="car-spec__item">
            {spec.name}: {spec.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
