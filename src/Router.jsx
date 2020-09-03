import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/alinuamaket">
          <Home />
        </Route>
        <Route exact path="/rent_with_driver">
          <RentWithDriver />
        </Route>
        <Route exact path="/rent">
          <Rent />
        </Route>
        <Route exact path="/reserv">
          <Reserv />
        </Route>
        <Route exact path="/assistance">
          <Assistance />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route path="/car_info/:id">
          <CarInfo />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
