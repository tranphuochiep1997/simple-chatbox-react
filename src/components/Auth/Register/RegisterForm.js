import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import SpinnerButton from '../../SpinnerButton';

const RegisterForm = ({ register, clearRegisterError, error, loading }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!error) {
      register({ username, password, confirmPassword });
    }
  }

  const onUserNameChange = (e) => {
    setUsername(e.target.value);
    if (error) {
      clearRegisterError();
    }
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) {
      clearRegisterError();
    }
  }

  const onconfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (error) {
      clearRegisterError();
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <h3 className='d-inline'>Register</h3>
        <Link to='/login'> or login</Link>
      </FormGroup>
      <FormGroup>
        <Label for='register-username'>Username</Label>
        <Input
          type='text'
          name='username'
          required
          id='register-username'
          value={username}
          onChange={onUserNameChange} />
        <FormText color="muted">Choose a username</FormText>
      </FormGroup>
      <FormGroup>
        <Label for='register-password'>Password</Label>
        <Input
          type='password'
          name='password'
          required
          id='register-password'
          value={password}
          onChange={onPasswordChange} />
      </FormGroup>
      <FormGroup>
        <Label for='register-confirm-password'>Confirm password</Label>
        <Input
          type='password'
          name='password'
          required
          id='register-confirm-password'
          value={confirmPassword}
          onChange={onconfirmPasswordChange} />
      </FormGroup>
      <SpinnerButton type='submit' disabled={loading} loading={loading} >
        Register
      </SpinnerButton>
    </Form>
  );
}

export default RegisterForm;
