import request from 'request';

import * as constants from './constants';

export function saveData(value) {
  if (!value) {
    return;
  }

  var url = 'https://api.themoviedb.org/3/search/multi?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query=' + window.encodeURI(value);

  return function(dispatch) {
    request.get(url, function (err, res, body) {
      let data = parseData(body);

      if (!data.errors) {
        return dispatch({
          type: constants.SAVING_DATA,
          value: value,
          data: data
        });
      }
    });
  };
}

function parseData(body) {
  return JSON.parse(body);
}
