import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UI_PROFILE_GET } from '../../redux/ui';
import { Root } from '../../types/redux';
import './style.css'

const ProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: UI_PROFILE_GET });
  }, [dispatch])

  const data = useSelector((state: Root) => state.ui.profile);
  return (
    <div className="profile">
      <Typography variant="h3">{data.title}</Typography>
      <Typography variant="h5">{data.description}</Typography>
    </div>
  )
}

export default ProfilePage;