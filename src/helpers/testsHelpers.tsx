import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { render, cleanup } from '@testing-library/react';

import columnsReducer from '../store/columnsReducer';

afterEach(cleanup);

export function renderWithRedux(
  component: React.ReactNode,
  { initialState, store = createStore(columnsReducer, initialState) }: any = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
}
