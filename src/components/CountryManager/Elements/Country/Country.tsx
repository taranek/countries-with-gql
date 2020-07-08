import React from 'react';
import { Props } from './Country.types';
import * as S from './Country.styles';
// import { Container } from './styles';

const Country: React.FC<Props> = ({ country, onRemove }) => {
  const handleRemove = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onRemove && onRemove(country);
  }, [onRemove, country]);
  return (
    <S.Container>
      <S.Header>
        {!!country && country.name}
        <S.RemoveButton onClick={handleRemove}>
          X
        </S.RemoveButton>
      </S.Header>
    </S.Container>
  );
};

export default Country;
