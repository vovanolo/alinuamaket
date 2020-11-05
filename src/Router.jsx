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
import AdditionalOptions from './pages/AdditionalOptions';
import RentConditions from './pages/RentConditions';
import CondfidentialPolicy from './pages/CondfidentialPolicy';
import AllNews from './pages/AllNews';
import AllAdditionalOptions from './pages/AllAdditionalOptions';

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
          <Route path={`${urls.rent}/:city`}>
            <Rent />
          </Route>
          <Route exact path={`${urls.rent}`}>
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
          <Route exact path={urls.news}>
            <AllNews />
          </Route>
          <Route path={`${urls.news}/:slug`}>
            <News />
          </Route>
          <Route path={`${urls.additional_options}/:slug`}>
            <AdditionalOptions />
          </Route>
          <Route exact path={urls.additional_options}>
            <AllAdditionalOptions />
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
          <Route exact path={urls.rent_conditions}>
            <RentConditions />
          </Route>
          <Route exact path={urls.confidential_policy}>
            <CondfidentialPolicy />
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
