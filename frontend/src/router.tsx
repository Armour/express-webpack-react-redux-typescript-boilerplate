import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

import 'materialize-css';
import 'sass/global';

import { BodyContentLoader, FooterContentLoader, HeaderContentLoader } from 'components/ContentLoader';
import Footer from 'components/Footer';
import Header from 'components/Header';

const HomePage = lazy(() => import(
  /*
    webpackChunkName: "home-page",
    webpackPreload: true
  */
  'pages/HomePage'));

const NotFoundPage = lazy(() => import(
  /*
    webpackChunkName: "not-found-page",
    webpackPrefetch: true
  */
 'pages/NotFoundPage'));

const ParallaxPage = lazy(() => import(
  /*
    webpackChunkName: "parallax-page",
    webpackPrefetch: true
  */
  'pages/ParallaxPage'));

const ReactPage = lazy(() => import(
  /*
    webpackChunkName: "react-page",
    webpackPrefetch: true
  */
  'pages/ReactPage'));

export default (
  <Fragment>
    <Suspense fallback={<HeaderContentLoader />}>
      <Header />
    </Suspense>
    <Suspense fallback={<BodyContentLoader />}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/react' component={ReactPage} />
        <Route path='/parallax' component={ParallaxPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
    <Suspense fallback={<FooterContentLoader />}>
      <Footer />
    </Suspense>
  </Fragment>
);
