import { put, takeEvery } from 'redux-saga/effects';
import { constant } from '../../constants';

import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_CHECK_LOGIN
} from './actions';

import { AuthData } from '../../mocks/AuthMock';
import { Action } from '../../types/redux';
import { LoginUser } from '../../types/user';

export function* loginCheckWatcher() {
  const isAuth = JSON.parse(localStorage.getItem('isAuth') || '');

    if (isAuth) {
      yield put({
        type: USER_LOGIN_SUCCESS
      });
    }
}

export function* loginUserWatcher(action: Action<LoginUser>) {
  try {
    const data = action.payload;

    if (data.username === AuthData.username && data.password === AuthData.password) {
      yield put({
        type: USER_LOGIN_SUCCESS
      });

      yield localStorage.setItem('isAuth', 'true');
    } else {
      yield put({
        type: USER_LOGIN_FAILURE,
        payload: constant.LOGIN_ERROR,
      })
    }
  } catch (error) {
    console.error(error);

    yield put({
      type: USER_LOGIN_FAILURE,
      payload: error.message,
    });
  }
}

export function* logoutUserWatcher() {
  yield localStorage.setItem('isAuth', 'false');
}

export function* userSaga() {
  yield takeEvery(USER_CHECK_LOGIN, loginCheckWatcher);
  yield takeEvery(USER_LOGIN, loginUserWatcher);
  yield takeEvery(USER_LOGOUT, logoutUserWatcher);
}
