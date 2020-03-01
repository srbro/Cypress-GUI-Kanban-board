import { CREATE_TICKET, DELETE_TICKET, UPDATE_TICKET } from './types';

export function createTicket(columnId: string, text: string = '') {
  return {
    type: CREATE_TICKET,
    payload: {
      columnId,
      text
    }
  };
}

export function deleteTicket(ticketId: string) {
  return {
    type: DELETE_TICKET,
    payload: {
      ticketId
    }
  };
}

export function updateTicket(columnId: string, ticketId: string, text: string) {
  return {
    type: UPDATE_TICKET,
    payload: { columnId, ticketId, text }
  };
}
