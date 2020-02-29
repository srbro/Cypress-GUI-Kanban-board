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
    tickets: [
      {
        id: '2',
        title: 'Do the dishes and clean the kitchen'
      },
      {
        id: '3',
        title: 'Walk the dog and buy him some treats'
      }
    ]
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
        <Column key={id} columnId={id} title={title} tickets={tickets} />
      ))}
    </Container>
  );
}

export default Board;
