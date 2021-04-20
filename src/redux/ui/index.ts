import { Home } from '../../types/home';
import { News } from '../../types/news';
import { Profile } from '../../types/profile';
import { Action } from '../../types/redux';
import * as uiActions from './actions';

export * from './actions';

export const uiInitialState = {
  news: {},
  profile: {},
  home: {},
  error: null,
};

export const uiReducer = (state = uiInitialState, { type, payload }: Action<Home | News | Profile>) => {
  switch (type) {
    case uiActions.UI_HOME_GET_SUCCESS:
      return { ...state, home: payload };

    case uiActions.UI_NEWS_GET_SUCCESS:
      return { ...state, news: payload };

    case uiActions.UI_PROFILE_GET_SUCCESS:
      return { ...state, profile: payload };

    case uiActions.UI_NEWS_GET_FAILURE:
    case uiActions.UI_PROFILE_GET_FAILURE:
    case uiActions.UI_HOME_GET_FAILURE:
      return { ...state, error: payload }

    default:
      return state;
  }
};
