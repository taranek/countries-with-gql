import styled from 'styled-components';
import {
  Link,
} from 'react-router-dom';
import { ReactSortable } from 'react-sortablejs';

export const Container = styled(ReactSortable)`
  display:flex;
  flex-wrap:wrap;
  margin: 20px;
  border: 1px solid black;
  padding: 0 15px;
  a {
    text-decoration: none
  }
`;
export const LinkWrapper = styled(Link)`
  display:flex;
  margin: 0 10px;
`;
