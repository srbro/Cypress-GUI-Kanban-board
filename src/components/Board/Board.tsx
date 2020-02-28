import React from 'react';

import Column from '../Column';
import { Container } from './styles';

const columns = {
  todo: {
    id: 'todo',
    title: 'To Do',
    tickets: [
      {
        id: '1',
        title: 'Do the dishes'
      }
    ]
  },
  inProgress: {
    id: 'inProgress',
    title: 'In Progress',
    tickets: []
  },
  done: {
    id: 'done',
    title: 'Done',
    tickets: []
  }
};

function Board() {
  return (
    <Container>
      {Object.values(columns).map(({ id, title, tickets }) => (
        <Column key={id} id={id} title={title} tickets={tickets} />
      ))}
    </Container>
  );
}

export default Board;
