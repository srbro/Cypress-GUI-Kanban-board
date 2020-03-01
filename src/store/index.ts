import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import throttle from 'lodash.throttle';

import { saveState } from './localStorage';

import columnsReducer from './columnsReducer';

const logger = createLogger();
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [logger];

const store = createStore(
  columnsReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
