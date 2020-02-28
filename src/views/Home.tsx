import React from 'react';

import Board from '../components/Board';
import { Layout, Header, Title, Subtitle, Separator } from './styles';

function Home() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default Home;
