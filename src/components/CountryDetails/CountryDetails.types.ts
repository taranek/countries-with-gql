import { connect, ConnectedProps } from 'react-redux';
import { Country } from '../../domain/Country';
import { setActiveCountry } from '../../redux/reducers/countryReducer/actions';
import { fetchCountryDetails, removeCountry } from '../../redux/reducers/countryReducer/countryDetails/actions';

type PropsFromRedux = ConnectedProps<typeof connector>

export type Props = PropsFromRedux & {
  activeCountry: Country | null;
}

export const mapStateToProps = (state): ConnectedProps<Props> => {
  const { activeCountry, loading } = state;
  return { activeCountry, loading };
};

export const mapDispatchToProps = {
  setActiveCountry: (country) => (setActiveCountry(country)),
  getCountryDetails: (countryId) => (fetchCountryDetails(countryId)),
  removeCountry: (country) => (removeCountry(country)),
};

export const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
);
