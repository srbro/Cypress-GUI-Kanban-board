import React from 'react';

import Board from '../../components/Board';

import { Container, Header, Title, Subtitle, Separator } from './styles';

function Home() {
  return (
    <Container>
      <Header>
        <Title>Kanban Board</Title>
        <Subtitle>
          <span role="img" aria-label="Human coding">
            👨🏻‍💻
          </span>
          Milos Dzeletovic
        </Subtitle>
      </Header>
      <Separator />
      <Board />
    </Container>
  );
}

export default Home;
