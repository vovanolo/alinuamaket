import React from 'react';

import * as urls from '../urls';

import '../styles/breadcrumbs2.css';

export default function Breadcrumbs({ active }) {
  const itemDefaultClasses = ['breadcrumbs2__item'];
  const itemActiveClasses = [
    ...itemDefaultClasses,
    'breadcrumbs2__item_active',
  ];

  return (
    <div className="breadcrumbs2">
      <div
        className={
          active === 'rent'
            ? itemActiveClasses.join(' ') + ' arrow arrow_red'
            : itemDefaultClasses.join(' ') + ' arrow arrow_grey'
        }
      >
        <span>Rent</span>
      </div>
      <div
        className={
          active === 'reserv'
            ? itemActiveClasses.join(' ')
            : itemDefaultClasses.join(' ')
        }
      >
        <span>Reserv</span>
      </div>
    </div>
  );
}
