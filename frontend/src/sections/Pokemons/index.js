import React, { useState, useEffect } from 'react';

import CardPokemon from '../../components/CardPokemon';

import api from '../../services/api';

import { Container } from './styles';

import Title from '../../components/Title';

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get('/pokemons').then((response) => {
      setPokemons(response.data);
    });
  }, []);


  return (
    <Container>
      <Title type="Fogo"/>
      {pokemons.map((pokemon) => (
        <CardPokemon
          name={pokemon.name}
          type={pokemon.type}
          image={pokemon.image}
          date={pokemon.date}
        />))}
    </Container>
  );
}

export default Pokemons;
