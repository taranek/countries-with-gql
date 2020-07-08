import { fetchCountries, setActiveCountry } from '../../redux/reducers/countryReducer/actions';
import { connect, ConnectedProps } from 'react-redux';
import { Country } from '../../domain/Country';
import { Action } from 'redux';
import { removeCountry } from '../../redux/reducers/countryReducer/countryDetails/actions';

type PropsFromRedux = ConnectedProps<typeof connector>

export type Props = PropsFromRedux & {
  countries: string[];
}
export const mapStateToProps = (state): ConnectedProps<Props> => {
  const { countries, loading } = state;
  return { countries, loading };
};

export const mapDispatchToProps = {
  getCountries: () => (fetchCountries()),
  setActiveCountry: (country: Country): Action => (setActiveCountry(country)),
  removeCountry: (country: Country) => (removeCountry(country)),

};
export const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
);
