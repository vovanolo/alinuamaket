import React from 'react';

export default function RentStep({ icon, iconAlt, title, subTitle }) {
  return (
    <div className="col-lg col-12 mb-4">
      <div className="rent-step__icon-container">
        <img className="rent-step__icon" src={icon} alt={iconAlt} />
      </div>

      <div className="rent-step__description">
        <h4 className="text_black rent-step__title">{title}</h4>
        <p className="text_grey rent-step__subtitle">{subTitle}</p>
      </div>
    </div>
  );
}
