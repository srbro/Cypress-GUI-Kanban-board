import { StateModel } from '../models';

export const loadState = () => {
  try {
    const serializedState: string | null = localStorage.getItem('state');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: StateModel) => {
  try {
    const serializedState: string = JSON.stringify(state);

    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error(err);
  }
};
