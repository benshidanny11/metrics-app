import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import leagues from '../redusers/leagues';

const reducers = combineReducers({
  leagues,
});

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default store;
