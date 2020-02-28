import React from 'react';

import Ticket from '../Ticket';
import { TicketModel } from '../../models';
import { Container, Header, Title, Body } from './styles';

type Props = {
  id: string;
  title: string;
  tickets: TicketModel[];
};

function Column({ id, title, tickets }: Props) {
  return (
    <Container>
      <Header id={id}>
        <Title>{title}</Title>
        <div>({tickets.length})</div>
      </Header>
      <Body id={id}>
        {tickets.map((ticket: TicketModel) => (
          <Ticket key={ticket.id} />
        ))}
      </Body>
    </Container>
  );
}

export default Column;
