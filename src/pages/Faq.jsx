import React, { useState, useEffect } from 'react';

import { fetchFaqData } from '../utils/fetchFaqData';

import { useTranslate } from '../hooks/useTranslate';

import '../styles/faq.css';

import FAQCard from '../components/FAQCard';

let mounted = true;

export default function Faq() {
  const [faqData, setFaqData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { i18n } = useTranslate();

  mounted = true;

  useEffect(() => {
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    setIsLoading(true);

    fetchFaqData(i18n.language)
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
  }, [i18n.language]);

  return (
    <div className="faq_section mb-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>FAQ</h1>
          </div>
        </div>
        {isLoading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" />
          </div>
        )}
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
