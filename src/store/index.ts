import {
  createStore,
  applyMiddleware,
  compose,
  Store,
  Middleware
} from 'redux';
import { createLogger } from 'redux-logger';
import throttle from 'lodash.throttle';

import { saveState } from './localStorage';

import reducer from './reducer';

const logger: Middleware = createLogger();
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware: Middleware[] = [logger];

const store: Store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
