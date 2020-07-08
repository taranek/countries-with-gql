import Client from '../../../api/clients/main';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const SET_COUNTRIES = 'SET_COUNTRIES';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const FETCH_COUNTRIES_FAILED = 'FETCH_COUNTRIES_FAILED';
export const SET_ACTIVE_COUNTRY = 'SET_ACTIVE_COUNTRY';

const client = new Client();

const fetchCountriesStarted = () => ({
  type: GET_COUNTRIES,
});
const fetchCountriesFailed = () => ({
  type: FETCH_COUNTRIES_FAILED,
});
const setCountries = (data) => ({
  type: SET_COUNTRIES, payload: data,
});

export const setActiveCountry = (country) => ({
  type: SET_ACTIVE_COUNTRY, payload: country,
});

export const setCountriesState = (data) => {
  return (dispatch) => {
    dispatch(setCountries(data));
  };
};
export const fetchCountries = () => {
  return (dispatch) => {
    dispatch(fetchCountriesStarted());
    client.fetchCountriesList()
      .then((res) => {
        dispatch(setCountries(res.data.countries));
      })
      .catch((err) => {
        dispatch(fetchCountriesFailed());
        throw err;
      });
  };
};
