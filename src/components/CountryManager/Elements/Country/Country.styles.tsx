import styled from 'styled-components';
export const Container = styled.div`
  display:flex;
  flex-wrap:wrap;
  width:100%;
  border:1px solid black;
  margin: 15px 0;
`;

export const Header = styled.div`
  display:flex;
  width:100%;
  background: #e2e2e2;
  padding:15px;
  &:hover {
    cursor:move;
    background: #d2d2d2;
  }
`;

export const RemoveButton = styled.button`
  background: pink;
  margin-left:5px;
  padding: 0 5px;
`;
