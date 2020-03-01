import React from 'react';
import { useDispatch } from 'react-redux';

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

import { createTicket } from '../../store/actions';

type Props = {
  columnId: string;
  title: string;
  tickets: TicketModel[];
};

function Column({ columnId, title, tickets }: Props) {
  const dispatch = useDispatch();

  const handleCreateClick = (): void => {
    dispatch(createTicket(columnId));
  };

  return (
    <Container>
      <Header columnId={columnId}>
        <AddTicketButton
          type="button"
          aria-label="Add new ticket"
          onClick={handleCreateClick}
        >
          +
        </AddTicketButton>
        <Title>{title}</Title>
        <TicketCount>({tickets.length})</TicketCount>
      </Header>
      <Body columnId={columnId}>
        {tickets.map(({ id, text }: TicketModel) => (
          <Ticket key={id} columnId={columnId} ticketId={id} text={text} />
        ))}
      </Body>
    </Container>
  );
}

export default Column;
