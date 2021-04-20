import { Home } from './home';
import { News } from './news';
import { Profile } from './profile';

export type Ui = {
  news: News;
  profile: Profile;
  home: Home;
};