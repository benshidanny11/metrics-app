import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import populationReducer from '../redusers/population';

const reducers = combineReducers({
  data: populationReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default store;
