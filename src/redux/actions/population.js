/* eslint-disable max-len */
import axios from 'axios';
import {
  FETCH_POPULATION_DATA, FETCH_COUTRIES_DATA, FILTER_DATA, STOP_FILTER, RESET_DETAILS_STATE,
} from './actionTypes';

const API_KEY = '0a8008ef65msh2137932400f0594p1793cfjsn382e2934f74c';
const API_HOST = 'world-population.p.rapidapi.com';
const API_ENDPOINT_URL_COUTRIES = 'https://world-population.p.rapidapi.com/allcountriesname';
const API_ENDPOINT_URL_WORLD = 'https://world-population.p.rapidapi.com/worldpopulation';
const API_ENDPOINT_URL_POPULATION = 'https://world-population.p.rapidapi.com/population';

export const getCoutries = async () => async (dispatch) => {
  const data = await axios.get(API_ENDPOINT_URL_COUTRIES, {
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST,
    },
  });
  const world = await axios.get(API_ENDPOINT_URL_WORLD, {
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST,
    },
  });
  dispatch({
    type: FETCH_COUTRIES_DATA, payload: data.data.body.countries, world: world.data.body, error: null,
  });
};

export const fetchDetails = async (payload) => async (dispatch) => {
  const { data } = await axios.get(API_ENDPOINT_URL_POPULATION, {

    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST,
    },
    params: { country_name: payload },
  });
  dispatch({ type: FETCH_POPULATION_DATA, payload: data.body, error: null });
};

export const filterData = (payload) => (dispatch) => dispatch({ type: FILTER_DATA, payload });
export const stopFilter = () => (dispatch) => dispatch({ type: STOP_FILTER });
export const resetDetailsState = () => (dispatch) => dispatch({ type: RESET_DETAILS_STATE });
