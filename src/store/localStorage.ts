import { StateModel } from '../models';

export const loadState = (): any => {
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

export const saveState = (state: StateModel): void => {
  try {
    const serializedState: string = JSON.stringify(state);

    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error(err);
  }
};
