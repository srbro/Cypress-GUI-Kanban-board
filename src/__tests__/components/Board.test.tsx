import React from 'react';
import { fireEvent } from '@testing-library/react';

import { renderWithRedux } from '../../helpers/testsHelpers';
import Board from '../../components/Board';

it('renders the Board component', () => {
  const { getByTestId } = renderWithRedux(<Board />);

  expect(getByTestId('board')).toBeInTheDocument();
});

it('renders three columns on the screen', () => {
  const { getAllByTestId } = renderWithRedux(<Board />);

  expect(getAllByTestId('column').length).toBe(3);
});

describe('user interations with the board', () => {
  it('creates a new ticket', () => {
    const { getAllByTestId, queryAllByTestId } = renderWithRedux(<Board />);

    expect(queryAllByTestId('ticket').length).toBe(0);

    fireEvent.click(getAllByTestId('add-ticket-button')[0]);

    expect(queryAllByTestId('ticket').length).toBe(1);
  });

  it('deletes a ticket', () => {
    const initialState = {
      toDo: {
        id: 'toDo',
        title: 'To Do',
        tickets: [
          {
            id: '1',
            text: 'Ticket text'
          }
        ]
      }
    };

    const { queryByText, getByTestId } = renderWithRedux(<Board />, {
      initialState
    });

    expect(queryByText('Ticket text')).toBeInTheDocument();

    fireEvent.click(getByTestId('delete-ticket-button'));

    expect(queryByText('Ticket text')).not.toBeInTheDocument();
  });

  it('updates a ticket', () => {
    const initialState = {
      toDo: {
        id: 'toDo',
        title: 'To Do',
        tickets: [
          {
            id: '1',
            text: 'Ticket text'
          }
        ]
      }
    };

    const { queryByText, getByText } = renderWithRedux(<Board />, {
      initialState
    });

    expect(queryByText('Ticket text')).toBeInTheDocument();

    fireEvent.dblClick(getByText('Ticket text'));
    fireEvent.change(getByText('Ticket text'), {
      target: { value: 'Updated text' }
    });

    expect(queryByText('Ticket text')).not.toBeInTheDocument();
    expect(queryByText('Updated text')).toBeInTheDocument();
  });

  // TODO: test drag and drop
});
