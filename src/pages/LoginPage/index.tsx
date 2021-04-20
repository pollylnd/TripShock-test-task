import { Button, Card, CardContent, TextField } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { routes } from '../../constants';
import { loginUser } from '../../redux/user';
import { Root } from '../../types/redux';
import './style.css'

type FormSubmitedElements = {
  username: {
    value: string;
  };
  password: {
    value: string;
  }
}

const LoginPage = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();

  const isAuth = useSelector((state: Root) => state.user.isAuth);
  const loginError = useSelector((state: Root) => state.user.error);

  useEffect(() => {
    if (isAuth) {
      history.push(routes.PROFILE);
    }
  }, [history, isAuth]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const elements = target.elements as unknown as FormSubmitedElements;

    const username = elements.username.value;
    const password = elements.password.value;

    dispatch(loginUser({ username, password }));
  };

  const renderError = (): JSX.Element | null => {
    if (loginError) {
      return <div className="form-error">{loginError}</div>;
    } else {
      return null;
    }
  }

  return (
    <form autoComplete="off" className="form" onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}>
      <Card className="login">
        <CardContent className="login__card">
          {renderError()}
          <TextField
            required
            id="username-required"
            label="Username"
            name="username"
            variant="outlined"
            className="login__field"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            variant="outlined"
            className="login__field"
          />
          <Button className="form-submit login__field" type="submit"  variant="contained" color="primary">
            Submit
          </Button>
        </CardContent>
      </Card>
      
    </form>
  );
};

export default LoginPage;