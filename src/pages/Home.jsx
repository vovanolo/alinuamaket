import React from 'react';

import Hero from '../sections/Hero';
import News from '../sections/News';
import Rent from '../sections/Rent';
import SeoText from '../sections/SeoText';
import Partners from '../sections/Partners';

import '../styles/home-media.css';
import '../styles/switch.css';

export default function Home() {
  return (
    <>
      <Hero />
      <News />
      <Rent />
      <SeoText />
      <Partners />
    </>
  );
}
