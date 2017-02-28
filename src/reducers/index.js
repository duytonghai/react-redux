import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

import dataSaving from './dataSaving';

const rootReducer = combineReducers({
	dataSaving,
  routing: routerReducer
});

export default rootReducer;
