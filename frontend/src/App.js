import React from 'react';

import GlobalStyle, { Container } from './global/styles';

import Filters from './sections/Filters';
import Pokemons from './sections/Pokemons';
import Buttons from './sections/Buttons';

function App() {
  return (
    <>
      <Container>
        <Filters/>
        <Pokemons/>
        <Buttons/>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
