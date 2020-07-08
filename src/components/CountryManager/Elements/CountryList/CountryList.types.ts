import { Country } from '../../../../domain/Country';
import { setCountriesState } from '../../../../redux/reducers/countryReducer/actions';
import { connect, ConnectedProps } from 'react-redux';


type PropsFromRedux = ConnectedProps<typeof connector>

export type Props = PropsFromRedux & {
  countries: Country[];
  onCountrySelect: (country: Country) => void;
  onCountryRemove: (country: Country) => void;
}

export const mapDispatchToProps = {
  setCountriesState: (countries: Country[]) => (setCountriesState(countries)),
};
export const connector = connect(() => ({}),
  mapDispatchToProps,
);
