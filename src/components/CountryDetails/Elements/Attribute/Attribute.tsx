import * as React from 'react';
import * as S from './Attribute.styles';
import { Props } from './Attribute.types';

const Attribute: React.FC<Props> = ({ attributeKey, value }: Props) => {
  return (<S.Wrapper>
    <S.Key>{attributeKey}</S.Key>
    <S.Value>{value}</S.Value>
  </S.Wrapper>);
}

export default Attribute;