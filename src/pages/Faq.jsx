import React, { useState, useEffect } from 'react';

import { fetchFaqData } from '../utils/fetchFaqData';

import '../styles/faq.css';

import FAQCard from '../components/FAQCard';

let mounted = true;

export default function Faq() {
  const [faqData, setFaqData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    mounted = true;
    setIsLoading(true);

    fetchFaqData(localStorage.getItem('item'))
      .then((res) => {
        if (mounted) {
          setFaqData(res);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
        }
      })
      .finally(() => {
        if (mounted) {
          setIsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="faq_section mb-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>FAQ</h2>
          </div>
        </div>
        {isLoading && <div className="spinner-border" />}
        {error && !isLoading && 'Error!'}
        {faqData.length > 0 && !isLoading && !error && (
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
        )}
      </div>
    </div>
  );
}
