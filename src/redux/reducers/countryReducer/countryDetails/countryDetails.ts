import { State } from '../countryReducer.types';
import { GET_COUNTRY_DETAILS, SET_COUNTRY_DETAILS, FETCH_DETAILS_FAILED, FETCH_DETAILS_SUCCESS } from './actions';


const initialState: State = {
  activeCountry: { name: 'Hello', id: '' },
  countries: [],
  loading: false,
  errorMessage: null,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_DETAILS:
      {
        return {
          ...state,
          loading: true,
        };
      }
    case FETCH_DETAILS_SUCCESS:
      {
        return {
          ...state,
          loading: false,
        };
      }
    case FETCH_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
      };
    case SET_COUNTRY_DETAILS:
      {
        return {
          ...state,
          activeCountry: action.payload,
          loading: false,
        };
      }
    default:
      return state;
  }
};
