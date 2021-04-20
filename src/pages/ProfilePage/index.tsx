import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { routes } from '../../constants';
import { UI_PROFILE_GET } from '../../redux/ui';
import { Root } from '../../types/redux';
import './style.css'

const ProfilePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const data = useSelector((state: Root) => state.ui.profile);
  const isAuth = useSelector((state: Root) => state.user.isAuth);

  useEffect(() => {
    if (!isAuth) {
      history.push(routes.LOGIN);
    }
  }, [history, isAuth])

  useEffect(() => {
    dispatch({ type: UI_PROFILE_GET });
  }, [dispatch])

  return (
    <div className="profile">
      <Typography variant="h3">{data.title}</Typography>
      <Typography variant="h5">{data.description}</Typography>
    </div>
  )
}

export default ProfilePage;