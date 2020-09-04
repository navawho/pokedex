import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Inter', sans-serif;
}

p {
  font-family: 'Roboto', sans-serif;
}

body {
  background: #f1f1f1;
}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 32px;
`;