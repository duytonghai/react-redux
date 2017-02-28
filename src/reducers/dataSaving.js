import * as constants from '../constants/constants';

import initialState from './initialState';

export default function savingDataReducer(state = initialState.dataSaving, action) {
  let newState = {};

  switch(action.type) {
    case constants.SAVING_DATA:
      newState.input_1 = action.value;
      return newState;

    default:
      return state;
  }
}
