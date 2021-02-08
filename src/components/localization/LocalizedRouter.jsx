import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import urls from '../../urls';

const LocalizedRouter = ({ RouterComponent, defaultLanguage, children }) => {
  const { i18n } = useTranslation();
  const [languageLoading, setLanguageLoading] = useState(true);

  useEffect(() => {
    const newLang = localStorage.getItem('lang') || defaultLanguage;
    i18n.changeLanguage(newLang).finally(() => setLanguageLoading(false));
  }, []);

  return (
    <RouterComponent>
      {languageLoading ? (
        <h3>Loading...</h3>
      ) : (
        <Route path="/:lang([a-z]{2})">
          {({ location }) => {
            const lang = i18n.language || defaultLanguage;

            const { pathname } = location;

            if (pathname === '/') {
              return <Redirect to={`/${lang}${urls.home}`} />;
            } else if (!pathname.includes(`/${lang}/`)) {
              return <Redirect to={`/${lang}${urls.notFound}`} />;
            }

            return children;
          }}
        </Route>
      )}
    </RouterComponent>
  );
};

export default LocalizedRouter;
