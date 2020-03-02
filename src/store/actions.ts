import { CREATE_TICKET, DELETE_TICKET, UPDATE_TICKET } from './types';
import { ActionModel } from '../models';

export function createTicket(columnId: string, text: string = ''): ActionModel {
  return {
    type: CREATE_TICKET,
    payload: {
      columnId,
      text
    }
  };
}

export function deleteTicket(ticketId: string): ActionModel {
  return {
    type: DELETE_TICKET,
    payload: {
      ticketId
    }
  };
}

export function updateTicket(
  columnId: string,
  ticketId: string,
  text: string
): ActionModel {
  return {
    type: UPDATE_TICKET,
    payload: { columnId, ticketId, text }
  };
}
