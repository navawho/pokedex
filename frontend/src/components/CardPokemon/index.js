import React from 'react';
import { Container, Info, Icon } from './styles';
import { MdEdit, MdDelete } from 'react-icons/md';
import formatDate from '../../utils/formatDate';

function CardPokemon({ name, type, image, date }) {
  return (
    <Container>
      <Icon>
        <MdEdit/>
      </Icon>
      <Info type={type}>
        <img
          src={image}
          alt={name}
        />
        <h5>{name}</h5>
        <h6>{type}</h6>
        <p>{formatDate(date)}</p>
      </Info>
      <Icon>
        <MdDelete/>
      </Icon>
    </Container>
  );
}

export default CardPokemon;