import { combineReducers } from 'redux';

import { uiReducer } from './ui';
import { userReducer } from './user';

export const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
});
