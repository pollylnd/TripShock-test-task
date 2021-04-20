import { Ui } from './ui';
import { User } from './user';

export type Root = {
  ui: Ui;
  user: User
};

export type Action<T> = {
  type: string;
  payload: T;
}