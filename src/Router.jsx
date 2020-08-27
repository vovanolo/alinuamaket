import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import NotFound from './pages/NotFound';
import Home from './pages/Home';
import RentWithDriver from './pages/RentWithDriver';
import Reserv from './pages/Reserv';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rent_with_driver">
          <RentWithDriver />
        </Route>
        <Route exact path="/reserv">
          <Reserv />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
