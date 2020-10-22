import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as urls from './urls';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import NotFound from './pages/NotFound';
import Home from './pages/Home';
import RentWithDriver from './pages/RentWithDriver';
import Rent from './pages/Rent';
import Reserv from './pages/Reserv';
import Contacts from './pages/Contacts';
import Assistance from './pages/Assistance';
import Faq from './pages/Faq';
import News from './pages/News';
import Summary from './pages/Summary';
import CarSale from './pages/CarSale';
import AboutUs from './pages/AboutUs';
import LoyaltyProgram from './pages/LoyaltyProgram';

import { FormContextProvider } from './components/ContextProvider';

export default function Router() {
  const [data, setData] = useState(null);

  return (
    <BrowserRouter>
      <Navbar />
      <FormContextProvider>
        <Switch>
          <Route exact path={urls.home}>
            <Home />
          </Route>
          <Route path={`${urls.reserv}/:slug`}>
            <Reserv />
          </Route>
          <Route exact path={urls.rentWithDriver}>
            <RentWithDriver data={data} />
          </Route>
          <Route exact path={`${urls.rent}/:city`}>
            <Rent />
          </Route>
          <Route exact path={urls.assistance}>
            <Assistance />
          </Route>
          <Route exact path={urls.contacts}>
            <Contacts />
          </Route>
          <Route exact path={urls.faq}>
            <Faq />
          </Route>
          <Route path={`${urls.news}/:slug`}>
            <News />
          </Route>
          <Route exact path={urls.summary}>
            <Summary />
          </Route>
          <Route exact path={urls.carSale}>
            <CarSale />
          </Route>
          <Route exact path={urls.aboutUs}>
            <AboutUs />
          </Route>
          <Route exact path={urls.loyaltyProgram}>
            <LoyaltyProgram />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </FormContextProvider>
      <Footer />
    </BrowserRouter>
  );
}
