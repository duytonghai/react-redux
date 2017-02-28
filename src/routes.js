import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import About from './components/About';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';

import FormSavingPage from './containers/FormSavingPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={About} />
    <Route path="form-savings" component={FormSavingPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
