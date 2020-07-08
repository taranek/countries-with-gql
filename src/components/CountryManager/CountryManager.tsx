import * as React from 'react';
import { Country as CountryType } from './../../domain/Country';
import { Props, connector } from './CountryManager.types';
import CountryList from './Elements/CountryList/CountryList';
import withLoading from '../../hoc/withLoading/withLoading';

const CountryManager: React.FC<Props> = (props: Props) => {
  const { countries, loading, getCountries, setActiveCountry, removeCountry } = props;

  React.useEffect(() => {
    if (countries === null || !(countries instanceof Array)) {
      getCountries();
    }
  }, [countries, getCountries]);

  const handleCountryRemove = React.useCallback((country: CountryType) => {
    removeCountry(country);
  }, [removeCountry]);

  const handleItemSelect = React.useCallback((c: CountryType) => {
    setActiveCountry(c);
  }, [setActiveCountry]);
  const ListWithLoading = withLoading<any>(CountryList);

  return <ListWithLoading
    loading={loading && !countries}
    loadingMessage={'List of countries is loading...'}
    countries={countries}
    onCountryRemove={handleCountryRemove}
    onCountrySelect={handleItemSelect}

  />;
};

export default connector(CountryManager);
