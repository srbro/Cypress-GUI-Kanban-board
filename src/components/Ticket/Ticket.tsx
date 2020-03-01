import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import useClickAway from '../../hooks/useClickAway';
import { deleteTicket, updateTicket } from '../../store/actions';

import UpdateTicket from '../UpdateTicket';

import { Container, DeleteTicketButton } from './styles';

type Props = {
  columnId: string;
  ticketId: string;
  text: string;
};

function Ticket({ columnId, ticketId, text }: Props) {
  const ticketRef = useRef<any>(null);
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(text ? false : true);
  const [textValue, setTextValue] = useState<string>(text);

  const handleDeleteClick = (): void => {
    dispatch(deleteTicket(columnId, ticketId));
  };

  const handleDoubleClick = () => {
    setIsEditable(true);
  };

  useClickAway(
    ticketRef,
    () => {
      if (textValue.length) {
        dispatch(updateTicket(columnId, ticketId, textValue));
        setIsEditable(false);
      } else {
        dispatch(updateTicket(columnId, ticketId, '[Empty ticket]'));
        setIsEditable(false);
      }
    },
    !isEditable
  );

  return (
    <Container
      columnId={columnId}
      onDoubleClick={handleDoubleClick}
      ref={ticketRef}
    >
      <DeleteTicketButton
        type="button"
        aria-label="Remove a ticket"
        onClick={handleDeleteClick}
      >
        <span>&#x2715;</span>
      </DeleteTicketButton>
      {isEditable ? (
        <UpdateTicket
          columnId={columnId}
          ticketId={ticketId}
          textValue={textValue}
          setTextValue={setTextValue}
          setIsEditable={setIsEditable}
        />
      ) : (
        text
      )}
    </Container>
  );
}

export default Ticket;
