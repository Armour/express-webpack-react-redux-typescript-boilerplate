import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Home from 'pages/Home';
import ParallaxPage from 'pages/ParallaxPage';
import ReactPage from 'pages/ReactPage';

import Layout from 'components/Layout';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="/react" component={ReactPage}/>
    <Route path="/parallax" component={ParallaxPage}/>
  </Route>
);
