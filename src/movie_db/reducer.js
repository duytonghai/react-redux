import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import {get} from 'lodash';

import * as constants from './constants';
import initialState from './initialState';

function dataSaving(state = initialState.dataSaving, action) {
  let newState = {};

  switch(action.type) {
    case constants.SAVING_DATA:
      newState.searchString = action.value;
      newState.movies = get(action, 'data.results', []);
      return newState;

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  dataSaving,
  routing: routerReducer
});

export default rootReducer;
