import { CREATE_TICKET, DELETE_TICKET, UPDATE_TICKET } from './types';
import { ColumnModel, TicketModel, ActionModel } from '../models';
import { uuid } from 'uuidv4';

type State = {
  toDo: ColumnModel;
  inProgress: ColumnModel;
  done: ColumnModel;
  [key: string]: any;
};

const initialState = {
  toDo: {
    id: 'toDo',
    title: 'To Do',
    tickets: [
      {
        id: '1',
        text: 'Feed the dog and give him emotions'
      }
    ]
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
  state: State = initialState,
  action: ActionModel
): State {
  switch (action.type) {
    case CREATE_TICKET:
      const { columnId } = action.payload;
      return {
        ...state,
        [columnId]: {
          ...state[columnId],
          tickets: [
            {
              id: uuid(),
              text: ''
            },
            ...state[columnId].tickets
          ]
        }
      };
    case DELETE_TICKET: {
      const { columnId, ticketId } = action.payload;
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
