import { Action } from '../../types/redux';
import { USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS, USER_LOGOUT } from './actions';

export * from './actions';

export const userInitialState = {
  isAuth: false,
  error: null
};

export const userReducer = (state = userInitialState, { type, payload }: Action<string>) => {
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return { isAuth: true, error: null };

    case USER_LOGIN_FAILURE:
      return { isAuth: false, error: payload }

    case USER_LOGOUT:
      return { isAuth: false, error: null };

    default:
      return state;
  }
};
