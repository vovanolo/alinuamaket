import React from "react";

import "../styles/priceFixed.css";

export default function PriceFixed({ price }) {
  return (
    <div className="price-fixed">
      <p className="price-fixed__text">Summary</p>
      <span className="price-fixed__price">{price} €</span>
    </div>
  );
}
