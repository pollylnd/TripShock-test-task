import { AppBar, Toolbar, Typography, Menu, MenuItem } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/user';
import { constant, routes } from '../../constants';
import { Root } from '../../types/redux';

import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import React, { useState } from 'react';

import './style.css'

const MenuComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state: Root) => state.user.isAuth);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleLogoutClick = () => {
    dispatch(logoutUser());
    history.push(routes.HOME);
  }

  return (
    <AppBar className="menu__bar" position="static">
      <Toolbar className="menu">
        <div className="menu__left">
          <NavLink activeClassName="is-active" exact={true} to={routes.HOME}>
            <Typography variant="h6" className="menu__item">
              <HomeIcon />
              {constant.MENU_HOME}
            </Typography>
          </NavLink>
          <NavLink activeClassName="is-active" to={routes.NEWS}>
          <Typography variant="h6" className="menu__item">
            <LibraryBooksIcon />
            {constant.MENU_NEWS}
          </Typography>
        </NavLink>
        </div>
        <div>
          <Typography aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="menu__item">
            <AccountBoxIcon />
          </Typography>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
            <NavLink activeClassName="is-active" to={isAuth ? routes.PROFILE : routes.LOGIN}>
              <Typography variant="h6" className="menu__item">
                {constant.MENU_PROFILE}
              </Typography>
            </NavLink>
            </MenuItem>
            {isAuth &&
              <MenuItem onClick={handleClose}> 
                <Typography variant="h6" className="menu__item" onClick={handleLogoutClick}>{constant.LOGOUT}</Typography>
              </MenuItem>
            }
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default MenuComponent;
