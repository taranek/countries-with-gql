import Client from '../../../../api/clients/main';
import { Action } from 'redux';
import { ResponseType } from './../../../../api/clients/main';
import { Country } from '../../../../domain/Country';
export const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS';
export const SET_COUNTRY_DETAILS = 'SET_COUNTRY_DETAILS';
export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS';
export const FETCH_DETAILS_FAILED = 'FETCH_DETAILS_FAILED';
export const SET_ACTIVE_COUNTRY = 'SET_ACTIVE_COUNTRY';
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY';
const client = new Client();

const fetchDetailsStarted = (): Action => ({
  type: GET_COUNTRY_DETAILS,
});
const fetchDetailsFailed = (): Action => ({
  type: FETCH_DETAILS_FAILED,
});
const fetchDetailsSuceeded = (data): { type: string; payload: any } => ({
  type: SET_COUNTRY_DETAILS, payload: data,
});

export const removeCountry = (country: Country): { type: string; payload: Country } => ({
  type: REMOVE_COUNTRY, payload: country,
});

export const fetchCountryDetails = (countryId: string) => {
  return (dispatch) => {
    dispatch(fetchDetailsStarted());
    client.fetchCountryDetails(countryId)
      .then((res: ResponseType) => {
        if (!!res?.data?.countries?.length && res.data.countries[0]) {
          const country = res.data.countries[0];
          dispatch(fetchDetailsSuceeded(country));
          return;
        }
        dispatch(fetchDetailsFailed());
      })
      .catch((err) => {
        dispatch(fetchDetailsFailed());
      });
  };
};
