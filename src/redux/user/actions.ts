import { LoginUser } from '../../types/user';

const root = 'user';

export const USER_LOGIN = `${root}/login`;
export const USER_CHECK_LOGIN = `${root}/login-check`;
export const USER_LOGIN_SUCCESS = `${root}/login-success`;
export const USER_LOGIN_FAILURE = `${root}/login-failure`;
export const USER_LOGOUT = `${root}/logout`;

export const loginUser = (data: LoginUser) => ({
  type: USER_LOGIN,
  payload: data,
});

export const loginUserSuccess = () => ({
  type: USER_LOGIN_SUCCESS,
  payload: true,
});

export const loginUserFailure = () => ({
  type: USER_LOGIN_FAILURE,
  payload: false,
});

export const logoutUser = () => ({
  type: USER_LOGOUT,
});
