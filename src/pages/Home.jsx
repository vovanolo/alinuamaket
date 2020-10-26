import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import Hero from '../sections/Hero';
import News from '../sections/News';
import Rent from '../sections/Rent';
import SeoText from '../sections/SeoText';
import Partners from '../sections/Partners';

import '../styles/home-media.css';

export default function Home() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const newLanguage = localStorage.getItem('lang');
    i18n.changeLanguage(newLanguage);
  }, []);

  return (
    <>
      <Helmet>
        <title>Alin</title>
        <meta name="description" content="Alin" />
      </Helmet>
      <Hero />
      <News />
      <Rent />
      <SeoText />
      <Partners />
    </>
  );
}
