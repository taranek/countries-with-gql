import styled from 'styled-components';

export const Wrapper = styled.dl`
  display:flex;
  flex-direction:flex-start;
  border:1px solid black;
  margin:20px;
`;
export const Key = styled.dt`
  background:#e0e0e0;
  font-weight:500;
  width:50%;
  margin:0;
  border-right: 1px solid black;
  padding:5px;
`;
export const Value = styled.dd`
  background:#ededed;
  width:50%;
  margin:0;
  padding:5px;
  `;