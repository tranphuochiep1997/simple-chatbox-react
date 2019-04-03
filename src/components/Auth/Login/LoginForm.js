import React, { useState } from 'react';
import { FormGroup, Form, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import SpinnerButton from '../../SpinnerButton';

const LoginForm = ({ login, clearLoginError, error, loading }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!error) {
      login({ username, password });
    }
  }

  const onUserNameChange = (e) => {
    setUsername(e.target.value);
    if (error) {
      clearLoginError();
    }
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) {
      clearLoginError();
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <h3 className='d-inline'>Login</h3>
        <Link to='/register'> or register</Link>
      </FormGroup>
      <FormGroup>
        <Label for='login-username'>Username</Label>
        <Input
          type='text'
          name='username'
          required
          id='login-username'
          value={username}
          onChange={onUserNameChange} />
      </FormGroup>
      <FormGroup>
        <Label for='login-password'>Password</Label>
        <Input
          type='password'
          name='password'
          required
          id='login-password'
          value={password}
          onChange={onPasswordChange} />
      </FormGroup>

      <SpinnerButton type='submit' loading={loading} disabled={loading}>Login</SpinnerButton>
    </Form>
  );
}

export default LoginForm;
