import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router';

import 'materialize-css';
import 'sass/global';

import Footer from 'components/Footer';
import Header from 'components/Header';
import HomePageLoader from 'pages/HomePage/components/ContentLoader';
import NotFoundPageLoader from 'pages/NotFoundPage/components/ContentLoader';
import ParallaxPageLoader from 'pages/ParallaxPage/components/ContentLoader';
import ReactPageLoader from 'pages/ReactPage/components/ContentLoader';

const HomePage = Loadable({
  loader: () => import(
    /*
      webpackChunkName: "home-page",
      webpackPreload: true
    */
    './pages/HomePage'),
  loading: HomePageLoader,
});

const NotFoundPage = Loadable({
  loader: () => import(
    /*
      webpackChunkName: "not-found-page",
      webpackPrefetch: true
    */
    './pages/NotFoundPage'),
  loading: NotFoundPageLoader,
});

const ParallaxPage = Loadable({
  loader: () => import(
    /*
      webpackChunkName: "parallax-page",
      webpackPrefetch: true
    */
    './pages/ParallaxPage'),
  loading: ParallaxPageLoader,
});

const ReactPage = Loadable({
  loader: () => import(
    /*
      webpackChunkName: "react-page",
      webpackPrefetch: true
    */
    './pages/ReactPage'),
  loading: ReactPageLoader,
});

export default (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/react' component={ReactPage} />
      <Route path='/parallax' component={ParallaxPage} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);
