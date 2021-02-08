import React from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/priceFixed.css';

export default function PriceFixed({ price }) {
  const { t } = useTranslation();

  return (
    <div className="price-fixed">
      <p className="price-fixed__text">{t('Summary')}</p>
      <span className="price-fixed__price">{price} €</span>
    </div>
  );
}
