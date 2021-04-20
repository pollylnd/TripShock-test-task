import React, { useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import MenuComponent from './pages/Menu';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

import { routes } from './constants';
import { USER_CHECK_LOGIN } from './redux/user';
import './App.css';
import { Typography } from '@material-ui/core';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: USER_CHECK_LOGIN });
  }, [dispatch])

  return (
    <div className="App">
      <MenuComponent />
      <header className="App-header">
        <NavLink to="/"><Typography variant="h2" className="menu__item">My blog</Typography></NavLink>
      </header>
      <div className="App-body">
        <Switch>
          <Route path={routes.HOME} exact component={HomePage} />
          <Route path={routes.NEWS} component={NewsPage} />
          <Route path={routes.PROFILE} component={ProfilePage} />
          <Route path={routes.LOGIN} component={LoginPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
