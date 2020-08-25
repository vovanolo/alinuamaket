import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Hero from '../sections/Hero';
import News from '../sections/News';

import '../styles/home-media.css';

export default function Home() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const newLanguage = localStorage.getItem('lang');
    console.log(newLanguage);
    i18n.changeLanguage(newLanguage);
  }, []);

  return (
    <>
      <Hero />
      <News />
    </>
  );
}
