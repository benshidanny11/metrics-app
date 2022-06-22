import { FETCH_DATA } from '../actions/actionTypes';

const initialState = [];
const leaguesReducer = (leagues = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return leagues;
  }
};

export default leaguesReducer;
