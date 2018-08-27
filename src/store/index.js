import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import general from '../reducers/generalReducer';

let middleware = process.env.NODE_ENV == 'production' ? applyMiddleware(thunk) : applyMiddleware(logger, thunk);

export default createStore(
  combineReducers({
    general,
  }),
  {},
  middleware
);