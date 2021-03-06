import {createStore, compose, applyMiddleware} from 'redux';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const demoStore = function(initialState) {
  const middlewares = [
    // Add other middleware on this line...

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,
  ];

  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares)
    )
  );
};

export default demoStore;
