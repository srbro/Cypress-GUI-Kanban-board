import React from 'react';

import { Container, DeleteButton } from './styles';

type Props = {
  columnId: string;
  ticketId: string;
  title: string;
};

function Ticket({ columnId, ticketId, title }: Props) {
  return (
    <Container columnId={columnId}>
      <DeleteButton type="button" aria-label="Remove a ticket">
        <span>&#x2715;</span>
      </DeleteButton>
      {title}
    </Container>
  );
}

export default Ticket;
