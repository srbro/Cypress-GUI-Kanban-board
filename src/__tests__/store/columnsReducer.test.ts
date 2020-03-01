import * as uuid from 'uuidv4';

import columnsReducer from '../../store/columnsReducer';
import { CREATE_TICKET, DELETE_TICKET, UPDATE_TICKET } from '../../store/types';
import { StateModel, ActionModel } from '../../models';

const initialState: StateModel = {
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
    tickets: [
      {
        id: '10',
        text: 'Mock ticket'
      }
    ]
  }
};

it('creates a ticket', () => {
  jest.spyOn(uuid, 'uuid').mockReturnValue('1');

  const action: ActionModel = {
    type: CREATE_TICKET,
    payload: {
      columnId: 'toDo',
      text: 'A new ticket'
    }
  };

  const state: StateModel = columnsReducer(initialState, action);

  expect(state).toEqual({
    ...initialState,
    toDo: {
      ...initialState.toDo,
      tickets: [
        {
          id: '1',
          text: 'A new ticket'
        }
      ]
    }
  });
});

it('deletes a ticket', () => {
  const action: ActionModel = {
    type: DELETE_TICKET,
    payload: {
      ticketId: '10'
    }
  };

  const state: StateModel = columnsReducer(initialState, action);

  expect(state).toEqual({
    ...initialState,
    done: {
      ...initialState.done,
      tickets: []
    }
  });
});

it('updates a ticket', () => {
  const action: ActionModel = {
    type: UPDATE_TICKET,
    payload: {
      columnId: 'done',
      ticketId: '10',
      text: 'Updated text'
    }
  };

  const state: StateModel = columnsReducer(initialState, action);

  expect(state).toEqual({
    ...initialState,
    done: {
      ...initialState.done,
      tickets: [
        {
          id: '10',
          text: 'Updated text'
        }
      ]
    }
  });
});
