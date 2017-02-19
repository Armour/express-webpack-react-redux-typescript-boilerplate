import React from 'react';
import { IndexRoute, Route } from 'react-router';

import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import ParallaxPage from 'pages/ParallaxPage';
import ReactPage from 'pages/ReactPage';

import Layout from 'components/Layout';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage}/>
    <Route path="react" component={ReactPage}/>
    <Route path="parallax" component={ParallaxPage}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
