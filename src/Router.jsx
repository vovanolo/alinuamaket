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
import CarInfo from './pages/CarInfo';
import Assistance from './pages/Assistance';
import Faq from './pages/Faq';
import News from './pages/News';

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
          <Route exact path={urls.reserv}>
            <Reserv sendData={(data) => setData(data)} />
          </Route>
          <Route exact path={urls.rentWithDriver}>
            <RentWithDriver data={data} />
          </Route>
          <Route exact path={urls.rent}>
            <Rent />
          </Route>
          <Route exact path={urls.assistance}>
            <Assistance />
          </Route>
          <Route exact path={urls.contacts}>
            <Contacts />
          </Route>
          <Route path={`${urls.carInfo}/:id`}>
            <CarInfo />
          </Route>
          <Route exact path={urls.faq}>
            <Faq />
          </Route>
          <Route path={`${urls.news}/:id`}>
            <News />
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
