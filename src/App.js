import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import routes from './routes';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageContainer from './components/PageContainer';

import { FormContextProvider } from './components/ContextProvider';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <FormContextProvider>
        <Switch>
          <Route exact path="/" sta>
            <Redirect to={`/${localStorage.getItem('lang') || 'ua'}`} />
          </Route>

          {routes.map((route) => (
            <Route key={route.path} exact={route.exact} path={route.path}>
              <PageContainer component={route.component} />
            </Route>
          ))}
        </Switch>
      </FormContextProvider>
      <Footer />
    </BrowserRouter>
  );
}
