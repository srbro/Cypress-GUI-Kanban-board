import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import reducer from './reducer';

const logger = createLogger();
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [logger];

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
