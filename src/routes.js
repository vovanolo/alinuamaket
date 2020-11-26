import urls from './urls';

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
import ConfidentialPolicy from './pages/ConfidentialPolicy';
import AllNews from './pages/AllNews';
import AllAdditionalOptions from './pages/AllAdditionalOptions';
import TransferInfo from './pages/TransferInfo';

const routes = [
  {
    path: urls.home,
    exact: true,
    component: Home,
  },
  {
    path: urls.reserv + '/:slug',
    exact: true,
    component: Reserv,
  },
  {
    path: urls.rentWithDriver,
    exact: true,
    component: RentWithDriver,
  },
  {
    path: urls.rent + '/:city',
    exact: true,
    component: Rent,
  },
  {
    path: urls.assistance,
    exact: true,
    component: Assistance,
  },
  {
    path: urls.contacts,
    exact: true,
    component: Contacts,
  },
  {
    path: urls.faq,
    exact: true,
    component: Faq,
  },
  {
    path: urls.news,
    exact: true,
    component: AllNews,
  },
  {
    path: urls.news + '/:slug',
    exact: true,
    component: News,
  },
  {
    path: urls.additionalOptions,
    exact: true,
    component: AllAdditionalOptions,
  },
  {
    path: urls.additionalOptions + '/:slug',
    exact: true,
    component: AdditionalOptions,
  },
  {
    path: urls.summary,
    exact: true,
    component: Summary,
  },
  {
    path: urls.carSale,
    exact: true,
    component: CarSale,
  },
  {
    path: urls.aboutUs,
    exact: true,
    component: AboutUs,
  },
  {
    path: urls.loyaltyProgram,
    exact: true,
    component: LoyaltyProgram,
  },
  {
    path: urls.rentConditions,
    exact: true,
    component: RentConditions,
  },
  {
    path: urls.confidentialPolicy,
    exact: true,
    component: ConfidentialPolicy,
  },
  {
    path: urls.transferInfo + '/:slug',
    exact: true,
    component: TransferInfo,
  },
  {
    path: '*',
    exact: false,
    component: NotFound,
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
