import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Layout from 'components/Layout';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import ParallaxPage from 'pages/ParallaxPage';
import ReactPage from 'pages/ReactPage';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage}/>
    <Route path="react" component={ReactPage}/>
    <Route path="parallax" component={ParallaxPage}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
