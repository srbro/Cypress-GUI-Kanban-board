import { uuid } from 'uuidv4';

import { CREATE_TICKET, DELETE_TICKET, UPDATE_TICKET } from './types';
import { StateModel, TicketModel, ActionModel } from '../models';
import { loadState } from './localStorage';

const initialState: StateModel = localStorage.getItem('state')
  ? loadState()
  : {
      toDo: {
        id: 'toDo',
        title: 'To Do',
        tickets: []
      },
      inProgress: {
        id: 'inProgress',
        title: 'In Progress',
        tickets: []
      },
      done: {
        id: 'done',
        title: 'Done',
        tickets: []
      }
    };

export default function(
  state: StateModel = initialState,
  action: ActionModel
): StateModel {
  switch (action.type) {
    case CREATE_TICKET:
      const { columnId, text } = action.payload;
      return {
        ...state,
        [columnId]: {
          ...state[columnId],
          tickets: [
            {
              id: uuid(),
              text
            },
            ...state[columnId].tickets
          ]
        }
      };
    case DELETE_TICKET: {
      const { ticketId } = action.payload;
      const { id: columnId } = Object.values(state).find(column =>
        column.tickets.find((ticket: TicketModel) => ticket.id === ticketId)
      );

      return {
        ...state,
        [columnId]: {
          ...state[columnId],
          tickets: state[columnId].tickets.filter(
            ({ id }: TicketModel) => id !== ticketId
          )
        }
      };
    }
    case UPDATE_TICKET: {
      const { columnId, ticketId, text } = action.payload;

      return {
        ...state,
        [columnId]: {
          ...state[columnId],
          tickets: state[columnId].tickets.map((ticket: TicketModel) => {
            if (ticket.id === ticketId) {
              return {
                ...ticket,
                text
              };
            }

            return ticket;
          })
        }
      };
    }
    default:
      return state;
  }
}
