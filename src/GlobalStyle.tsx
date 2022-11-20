import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    height: 120px;
    width: 120px;
  }
  input {
    border-radius: 5px;
    padding: 3px 5px;
  }
  .btn {
    background-color: orange;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    padding: 4px 6px;
    &_delete {
      background-color: tomato;
      align-self: flex-end;
    }
  }
`;

export const MainStyled = styled.main`
  padding: 10px;
  display: grid;
  grid-gap: 12px;
`;
