import React from 'react';
import { useSelector } from 'react-redux';

import Column from '../Column';
import { Container } from './styles';

function Board() {
  const columns = useSelector(state => state);
  return (
    <Container data-testid="board">
      {Object.values(columns).map(({ id, title, tickets }) => (
        <Column key={id} columnId={id} title={title} tickets={tickets} />
      ))}
    </Container>
  );
}

export default Board;
