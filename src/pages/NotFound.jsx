import React from 'react';
import { Helmet } from 'react-helmet';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h1 className="navbar-offset">Not Found!</h1>
    </>
  );
}
