import React from 'react';
import CardPokemon from '../../components/CardPokemon';

import { Container } from './styles';

import Title from '../../components/Title';

function Pokemons() {
  return (
    <Container>
      <Title/>
      <CardPokemon/>
    </Container>
  );
}

export default Pokemons;
