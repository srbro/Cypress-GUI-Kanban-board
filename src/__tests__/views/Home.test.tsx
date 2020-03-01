import React from 'react';

import { renderWithRedux } from '../../helpers/testsHelpers';
import Home from '../../views/Home';

it('renders the Home view', () => {
  const { getByText, getByTestId } = renderWithRedux(<Home />);

  expect(getByText('Kanban Board')).toBeInTheDocument();
  expect(getByText('Milos Dzeletovic')).toBeInTheDocument();
  expect(getByTestId('board')).toBeInTheDocument();
});
