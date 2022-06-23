/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
import {
  FETCH_COUTRIES_DATA, FETCH_POPULATION_DATA, FILTER_DATA, RESET_DETAILS_STATE, STOP_FILTER,
} from '../actions/actionTypes';

const initialState = {
  countries: [],
  population: {},
  world: {},
  filterdData: [],
  isFiltering: false,
};
const populationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUTRIES_DATA:
      return { ...state, countries: action.payload.sort(), world: action.world };
    case FILTER_DATA:
      const filterdData = state.countries.filter((country) => country.toLowerCase().includes(action.payload.toLowerCase()));
      return { ...state, filterdData, isFiltering: true };
    case STOP_FILTER:
      return { ...state, filterdData: [], isFiltering: false };
    case FETCH_POPULATION_DATA:
      return { ...state, population: action.payload };
    case RESET_DETAILS_STATE:
      return { ...state, population: {} };
    default:
      return state;
  }
};

export default populationReducer;
