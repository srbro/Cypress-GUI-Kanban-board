import React from 'react';

import Ticket from '../Ticket';
import { TicketModel } from '../../models';
import {
  Container,
  Header,
  AddTicketButton,
  Title,
  TicketCount,
  Body
} from './styles';

type Props = {
  columnId: string;
  title: string;
  tickets: TicketModel[];
};

function Column({ columnId, title, tickets }: Props) {
  return (
    <Container>
      <Header columnId={columnId}>
        <AddTicketButton type="button" aria-label="Add new ticket">
          +
        </AddTicketButton>
        <Title>{title}</Title>
        <TicketCount>({tickets.length})</TicketCount>
      </Header>
      <Body columnId={columnId}>
        {tickets.map(({ id, title }: TicketModel) => (
          <Ticket key={id} columnId={columnId} ticketId={id} title={title} />
        ))}
      </Body>
    </Container>
  );
}

export default Column;
