import { put, takeEvery } from 'redux-saga/effects';

import * as uiActions from './actions';

import { HomeData } from '../../mocks/HomeMock';
import { NewsData } from '../../mocks/NewsMock';
import { ProfileData } from '../../mocks/ProfileMock';

export function* uiGetHomeWatcher() {
  try {
    yield put({ type: uiActions.UI_HOME_GET_SUCCESS, payload: HomeData });
  } catch (error) {
    yield put({ type: uiActions.UI_HOME_GET_FAILURE, payload: error });
  }
}

export function* uiGetNewsWatcher() {
  try {
    yield put({ type: uiActions.UI_NEWS_GET_SUCCESS, payload: NewsData });
  } catch (error) {
    yield put({ type: uiActions.UI_NEWS_GET_FAILURE, payload: error });
  }
}


export function* uiGetProfileWatcher() {
  try {
    yield put({ type: uiActions.UI_PROFILE_GET_SUCCESS, payload: ProfileData });
  } catch (error) {
    yield put({ type: uiActions.UI_PROFILE_GET_FAILURE, payload: error });
  }
}

export function* uiSaga() {
  yield takeEvery(uiActions.UI_HOME_GET, uiGetHomeWatcher);
  yield takeEvery(uiActions.UI_NEWS_GET, uiGetNewsWatcher);
  yield takeEvery(uiActions.UI_PROFILE_GET, uiGetProfileWatcher);
}
