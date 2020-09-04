import React from 'react';
import Title from '../../components/Title';
import types from '../../utils/types';

import { Card } from './styles';

function Filters() {
  return (
    <Card>
      {types.map(type => <Title type={type}/>)}
    </Card>
  );
}

export default Filters;
