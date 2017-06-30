import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import NotFoundPage from './components/NotFoundPage';
import FormSavingPageContainer from './components/FormSavingPageContainer';

export default (
  <Route path="/" component={FormSavingPageContainer}>
    <Route path="form-savings" component={FormSavingPageContainer} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
