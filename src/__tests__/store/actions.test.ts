import { createTicket, deleteTicket, updateTicket } from '../../store/actions';
import { CREATE_TICKET, DELETE_TICKET, UPDATE_TICKET } from '../../store/types';
import { ActionModel } from '../../models';

it('creates a CREATE_TICKET action', () => {
  const expectedAction: ActionModel = {
    type: CREATE_TICKET,
    payload: {
      columnId: '1',
      text: ''
    }
  };

  expect(createTicket('1', '')).toEqual(expectedAction);
});

it('creates a DELETE_TICKET action', () => {
  const expectedAction: ActionModel = {
    type: DELETE_TICKET,
    payload: {
      ticketId: '1'
    }
  };

  expect(deleteTicket('1')).toEqual(expectedAction);
});

it('creates a UPDATE_TICKET action', () => {
  const expectedAction: ActionModel = {
    type: UPDATE_TICKET,
    payload: {
      columnId: '1',
      ticketId: '10',
      text: 'Updated text'
    }
  };

  expect(updateTicket('1', '10', 'Updated text')).toEqual(expectedAction);
});
