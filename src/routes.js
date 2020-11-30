import { lazy } from 'react';

import urls from './urls';

const routes = [
  {
    path: urls.home,
    exact: true,
    component: lazy(() =>
      import('./pages/Home' /* webpackChunkName: 'HomePage' */)
    ),
  },
  {
    path: urls.reserv + '/:slug',
    exact: true,
    component: lazy(() =>
      import('./pages/Reserv' /* webpackChunkName: 'ReservPage' */)
    ),
  },
  {
    path: urls.rentWithDriver,
    exact: true,
    component: lazy(() =>
      import(
        './pages/RentWithDriver' /* webpackChunkName: 'RentWithDriverPage' */
      )
    ),
  },
  {
    path: urls.rent + '/:city',
    exact: true,
    component: lazy(() =>
      import('./pages/Rent' /* webpackChunkName: 'RentDriverPage' */)
    ),
  },
  {
    path: urls.assistance,
    exact: true,
    component: lazy(() =>
      import('./pages/Assistance' /* webpackChunkName: 'AssistancePage' */)
    ),
  },
  {
    path: urls.contacts,
    exact: true,
    component: lazy(() =>
      import('./pages/Contacts' /* webpackChunkName: 'ContactsPage' */)
    ),
  },
  {
    path: urls.faq,
    exact: true,
    component: lazy(() =>
      import('./pages/Faq' /* webpackChunkName: 'FaqPage' */)
    ),
  },
  {
    path: urls.news,
    exact: true,
    component: lazy(() =>
      import('./pages/AllNews' /* webpackChunkName: 'AllNewsPage' */)
    ),
  },
  {
    path: urls.news + '/:slug',
    exact: true,
    component: lazy(() =>
      import('./pages/News' /* webpackChunkName: 'NewsPage' */)
    ),
  },
  {
    path: urls.additionalOptions,
    exact: true,
    component: lazy(() =>
      import(
        './pages/AllAdditionalOptions' /* webpackChunkName: 'AllAdditionalOptionsPage' */
      )
    ),
  },
  {
    path: urls.additionalOptions + '/:slug',
    exact: true,
    component: lazy(() =>
      import(
        './pages/AdditionalOptions' /* webpackChunkName: 'AdditionalOptionsPage' */
      )
    ),
  },
  {
    path: urls.summary,
    exact: true,
    component: lazy(() =>
      import('./pages/Summary' /* webpackChunkName: 'SummaryPage' */)
    ),
  },
  {
    path: urls.carSale,
    exact: true,
    component: lazy(() =>
      import('./pages/CarSale' /* webpackChunkName: 'CarSalePage' */)
    ),
  },
  {
    path: urls.aboutUs,
    exact: true,
    component: lazy(() =>
      import('./pages/AboutUs' /* webpackChunkName: 'AboutUsPage' */)
    ),
  },
  {
    path: urls.loyaltyProgram,
    exact: true,
    component: lazy(() =>
      import(
        './pages/LoyaltyProgram' /* webpackChunkName: 'LoyaltyProgramPage' */
      )
    ),
  },
  {
    path: urls.rentConditions,
    exact: true,
    component: lazy(() =>
      import(
        './pages/RentConditions' /* webpackChunkName: 'RentConditionsPage' */
      )
    ),
  },
  {
    path: urls.confidentialPolicy,
    exact: true,
    component: lazy(() =>
      import(
        './pages/ConfidentialPolicy' /* webpackChunkName: 'ConfidentialPolicyPage' */
      )
    ),
  },
  {
    path: urls.transferInfo + '/:slug',
    exact: true,
    component: lazy(() =>
      import('./pages/TransferInfo' /* webpackChunkName: 'TransferInfoPage' */)
    ),
  },
  {
    path: '*',
    exact: false,
    component: lazy(() =>
      import('./pages/NotFound' /* webpackChunkName: 'NotFoundPage' */)
    ),
  },
];

const localizedRoutes = routes.map((route) => {
  if (route.path !== '*') {
    return {
      ...route,
      path: '/:lang' + route.path,
    };
  } else {
    return route;
  }
});

export default localizedRoutes;
