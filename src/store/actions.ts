import { CREATE_TICKET, DELETE_TICKET, UPDATE_TICKET } from './types';

export function createTicket(columnId: string) {
  return {
    type: CREATE_TICKET,
    payload: {
      columnId
    }
  };
}

export function deleteTicket(columnId: string, ticketId: string) {
  return {
    type: DELETE_TICKET,
    payload: {
      columnId,
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
