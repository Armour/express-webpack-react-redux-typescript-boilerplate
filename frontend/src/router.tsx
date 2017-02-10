import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Home from 'pages/Home';
import Page1 from 'pages/Page1';
import Page2 from 'pages/Page2';

import Layout from 'components/Layout';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="/page1" component={Page1}/>
    <Route path="/page2" component={Page2}/>
  </Route>
);
