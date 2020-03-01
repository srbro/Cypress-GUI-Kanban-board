import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { render, cleanup } from '@testing-library/react';

import reducer from '../store/reducer';

afterEach(cleanup);

export function renderWithRedux(
  component: React.ReactNode,
  { initialState, store = createStore(reducer, initialState) }: any = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
}
