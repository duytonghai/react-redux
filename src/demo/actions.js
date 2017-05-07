import * as constants from './constants';

export function saveData(value) {
  return function(dispatch) {
    return dispatch({
      type: constants.SAVING_DATA,
      value: value
    });
  };
}