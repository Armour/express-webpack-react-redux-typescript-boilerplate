import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';

import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import ParallaxPage from 'pages/ParallaxPage';
import ReactPage from 'pages/ReactPage';

export default (
  <Router>
    <div>
      <Header/>
      <Switch>
        <Route exact={true} path="/" component={HomePage as any}/>
        <Route path="/react" component={ReactPage as any}/>
        <Route path="/parallax" component={ParallaxPage as any}/>
        <Route component={NotFoundPage as any}/>
      </Switch>
      <Footer/>
    </div>
  </Router>
);
