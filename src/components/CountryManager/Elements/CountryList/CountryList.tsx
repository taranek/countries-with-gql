import React from 'react';
import { Props } from './CountryList.types';
import { Country as CountryType } from '../../../../domain/Country';
import Country from '../Country/Country';
import * as S from './CountryList.styles';
import { connector } from './CountryList.types';
// import { Container } from './styles';

const CountryList: React.FC<Props> = ({ countries, onCountryRemove, onCountrySelect, setCountriesState }: Props) => {
  const [items, setItems] = React.useState(countries);
  React.useEffect(() => {
    setItems(countries);
  }, [countries]);

  const handleSort = React.useCallback((): void => {
    setCountriesState(items);
  }, [items, setCountriesState]);


  const MemoisedList = React.useMemo(() => (
    <S.Container list={!!countries && items}
      setList={setItems}
      onSort={handleSort}
    >
      {!!items && items.map((c: CountryType, i: number) => (
        <S.LinkWrapper
          to={`/country/${c.id}`}
          onClick={(): void => {
            onCountrySelect && onCountrySelect(c);
          }}
          key={c.id as string} >
          <Country
            key={i}
            country={c}
            onRemove={(): void => {
              onCountryRemove && onCountryRemove(c);
            }}
          />
        </S.LinkWrapper>))
      }
    </S.Container >),
    [countries, items, onCountryRemove, onCountrySelect, handleSort]);
  return MemoisedList;
};

export default connector(CountryList);
