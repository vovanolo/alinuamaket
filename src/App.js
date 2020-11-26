import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from './routes';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { FormContextProvider } from './components/ContextProvider';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <FormContextProvider>
//         <Switch>
//           <Route path="/">12345</Route>
//           {routes.map((route) => (
//             <Route
//               key={route.path}
//               exact={route.exact}
//               path={route.path}
//               component={route.component}
//             />
//           ))}
//         </Switch>
//       </FormContextProvider>

//       <Footer />
//     </BrowserRouter>
//   );
// }
