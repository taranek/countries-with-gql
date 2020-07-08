import { State } from './countryReducer.types';
import { GET_COUNTRIES, SET_COUNTRIES, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAILED, SET_ACTIVE_COUNTRY } from './actions';
import countryDetailsReducer from './countryDetails/countryDetails';
import { REMOVE_COUNTRY } from './countryDetails/actions';

const initialState: State = {
  activeCountry: null,
  countries: null,
  loading: true,
  errorMessage: null,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      {
        return {
          ...state,
          loading: true,
        };
      }
    case FETCH_COUNTRIES_SUCCESS:
      {
        return {
          ...state,
          loading: false,
        };
      }
    case FETCH_COUNTRIES_FAILED:
      {
        return state;
      }
    case SET_COUNTRIES:
      {
        return {
          ...state,
          countries: action.payload,
          loading: false,
        };
      }
    case SET_ACTIVE_COUNTRY:
      {
        return {
          ...state,
          activeCountry: action.payload,
        };
      }
    case REMOVE_COUNTRY:
      {
        const { countries } = state;
        const filteredCountries = countries !== null ? countries.filter((c) => c.id !== action.payload.id) : countries;
        return {
          ...state,
          countries: filteredCountries,
        };
      }
    default:
      return countryDetailsReducer(state, action);
  }
};
