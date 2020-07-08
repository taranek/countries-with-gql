import * as React from 'react';
import { Props, connector } from './CountryDetails.types';
import { Link } from 'react-router-dom';
import * as S from './CountryDetails.styles';
import AttributeList from './Elements/AttributeList/AttributeList';
import withLoading from '../../hoc/withLoading/withLoading';
import { useHistory } from 'react-router-dom';

const CountryDetails: React.FC<Props> = ({ activeCountry: country, getCountryDetails, loading, setActiveCountry, removeCountry }: Props) => {
  React.useEffect(() => {
    country && country.id && getCountryDetails(country.id);
  }, [country, getCountryDetails]);
  const AttributesWithLoading = withLoading<any>(AttributeList);
  const history = useHistory();

  const handleRemove = React.useCallback(() => {
    history.push('/');
    setActiveCountry(null);
    removeCountry(country);
  }, [history, setActiveCountry, country, removeCountry]);
  return (
    <React.Fragment>
      <S.Navbar>
        <Link to="/">Go back</Link>
      </S.Navbar>
      <h2>{!!country && country.name}</h2>
      {!!country && <AttributesWithLoading item={country} loading={loading && !country} />}
      <S.RemoveButton onClick={handleRemove}>Remove Country</S.RemoveButton>
    </React.Fragment>);
};

export default connector(CountryDetails);
