import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './demo/components/App';
import About from './demo/components/About';
import HomePage from './demo/components/HomePage';
import NotFoundPage from './demo/components/NotFoundPage';
import FormSavingPageContainer from './demo/components/FormSavingPageContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={About} />
    <Route path="form-savings" component={FormSavingPageContainer} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
