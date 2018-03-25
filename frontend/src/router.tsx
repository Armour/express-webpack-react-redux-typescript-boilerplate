import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ParallaxPage } from 'pages/ParallaxPage';
import { ReactPage } from 'pages/ReactPage';

export const router = (
  <div>
    <Header dropdownLists={['parallax']} />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/react' component={ReactPage} />
      <Route path='/parallax' component={ParallaxPage} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);
