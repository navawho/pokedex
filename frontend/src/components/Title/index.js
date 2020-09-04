import React from 'react';
import { Container } from './styles';

function Title({ type }) {
  return (
    <Container type={type}>
      <h5>{type}</h5>
    </Container>
  );
}

export default Title;
