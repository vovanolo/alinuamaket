import React, { useState, useRef } from 'react';

import '../styles/faq.css';

import FAQCard from '../components/FAQCard';

const faqData = [
  {
    id: 1,
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'Description 3',
  },
];

export default function Faq() {
  return (
    <div className="faq_section">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>FAQ</h2>
          </div>
        </div>
        <div className="accordion" id="faqAccordion">
          {faqData.map(({ id, title, description }) => (
            <FAQCard
              key={id}
              id={`faqAccordion${id}`}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
