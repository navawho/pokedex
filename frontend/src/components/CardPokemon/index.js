import React from 'react';
import { Container, Info, Icon } from './styles';
import { MdEdit, MdDelete } from 'react-icons/md';

function CardPokemon() {
  return (
    <Container>
      <Icon>
        <MdEdit/>
      </Icon>
      <Info>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
          alt="Charmander"
        />
        <h5>Charmander</h5>
        <h6>Elétrico</h6>
        <p>Capturado há 6 dias</p>
      </Info>
      <Icon>
        <MdDelete/>
      </Icon>
    </Container>
  );
}

export default CardPokemon;