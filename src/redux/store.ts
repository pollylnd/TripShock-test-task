/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { uiSaga } from './ui/sagas';
import { userSaga } from './user/sagas';

import { rootReducer } from './rootReducer';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(uiSaga);
  sagaMiddleware.run(userSaga);

  return store;
};
