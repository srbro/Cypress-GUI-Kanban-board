import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import useClickAway from '../../hooks/useClickAway';
import { deleteTicket, updateTicket } from '../../store/actions';

import UpdateTicket from '../UpdateTicket';
import Draggable from '../Draggable';

import { Container, DeleteTicketButton, Text } from './styles';

type Props = {
  columnId: string;
  ticketId: string;
  text: string;
};

function Ticket({ columnId, ticketId, text }: Props) {
  const ticketRef = useRef<any>(null);
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState<boolean>(text ? false : true);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>(text);

  const handleDeleteTicket = (): void => {
    dispatch(deleteTicket(ticketId));
  };

  const handleDoubleClick = (): void => {
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

  const dragData: string = JSON.stringify({
    originColumnId: columnId,
    ticketId,
    text
  });

  useEffect(() => {
    setIsEmpty(false);
    if (text === '[Empty ticket]') {
      setIsEmpty(true);
    }
  }, [text]);

  return (
    <Draggable dragData={dragData}>
      <Container
        columnId={columnId}
        onDoubleClick={handleDoubleClick}
        ref={ticketRef}
        data-testid="ticket"
      >
        <DeleteTicketButton
          type="button"
          aria-label="Delete a ticket"
          onClick={handleDeleteTicket}
          data-testid="delete-ticket-button"
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
            isEmpty={isEmpty}
            setIsEmpty={setIsEmpty}
          />
        ) : (
          <Text isEmpty={isEmpty} columnId={columnId}>
            {text}
          </Text>
        )}
      </Container>
    </Draggable>
  );
}

export default Ticket;
