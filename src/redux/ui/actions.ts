import { Home } from '../../types/home';
import { News } from '../../types/news';
import { Profile } from '../../types/profile';

const root = 'ui';

export const UI_NEWS_GET = `${root}/get-news`;
export const UI_NEWS_GET_SUCCESS = `${root}/get-news-success`;
export const UI_NEWS_GET_FAILURE = `${root}/get-news-failure`;

export const UI_HOME_GET = `${root}/get-home`;
export const UI_HOME_GET_SUCCESS = `${root}/get-home-success`;
export const UI_HOME_GET_FAILURE = `${root}/get-home-failure`;

export const UI_PROFILE_GET = `${root}/get-profile`;
export const UI_PROFILE_GET_SUCCESS = `${root}/get-profile-success`;
export const UI_PROFILE_GET_FAILURE = `${root}/get-profile-failure`;

export const getNewsDataSuccess = (data: News) => ({
  type: UI_NEWS_GET_SUCCESS,
  payload: data,
});

export const getNewsDataError = (error: string) => ({
  type: UI_NEWS_GET_FAILURE,
  payload: error,
});

export const getHomeDataSuccess = (data: Home) => ({
    type: UI_HOME_GET_SUCCESS,
    payload: data,
});

export const getHomeDataFailure = (error: string) => ({
  type: UI_HOME_GET_FAILURE,
  payload: error,
});

  
export const getProfileDataSuccess = (data: Profile) => ({
  type: UI_PROFILE_GET_SUCCESS,
  payload: data,
});

export const getProfileDataFailure = (error: string) => ({
  type: UI_PROFILE_GET_FAILURE,
  payload: error,
});


