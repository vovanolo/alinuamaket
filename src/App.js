import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TagManager from 'react-gtm-module';

import routes from './routes';
import languages from './constants/languages';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageContainer from './components/PageContainer';

import { FormContextProvider } from './components/ContextProvider';
import LocalizedRouter from './components/localization/LocalizedRouter';
import LocalizedSwitch from './components/localization/LocalizedSwitch';

const tagManagerArgs = {
  gtmId: 'GTM-NWSZJLP',
};

TagManager.initialize(tagManagerArgs);

const defaultLanguage = languages.English;

export default function App() {
  return (
    <LocalizedRouter
      RouterComponent={BrowserRouter}
      defaultLanguage={defaultLanguage}
    >
      <Navbar />
      <FormContextProvider>
        <LocalizedSwitch>
          {routes.map((route) => (
            <Route key={route.path} exact={route.exact} path={route.path}>
              <PageContainer component={route.component} />
            </Route>
          ))}
        </LocalizedSwitch>
      </FormContextProvider>
      <Footer />
    </LocalizedRouter>
  );
}
