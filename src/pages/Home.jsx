import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from '../sections/Hero';
import News from '../sections/News';
import Rent from '../sections/Rent';
import SeoText from '../sections/SeoText';
import Partners from '../sections/Partners';

import '../styles/home-media.css';

export default function Home() {
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
