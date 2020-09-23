import React, { useState, useEffect } from 'react';

import { fetchFaqData } from '../utils/fetchFaqData';

import '../styles/faq.css';

import FAQCard from '../components/FAQCard';

export default function Faq() {
  const [faqData, setFaqData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFaqData()
      .then((res) => console.log(res))
      .catch((err) => console.dir(err));
  }, []);

  return (
    <div className="faq_section">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>FAQ</h2>
          </div>
        </div>
        <div className="accordion" id="faqAccordion">
          {faqData.map(({ id, name, description }) => (
            <FAQCard
              key={id}
              id={`faqAccordion${id}`}
              name={name}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
