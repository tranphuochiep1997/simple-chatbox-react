import React, { useEffect, useState } from 'react';
import LoginForm from './LoginForm';
import AuthLayout from '../AuthLayout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, clearLoginError } from './LoginAction';
import { Redirect } from 'react-router-dom';

const LoginContainer = (props) => {

  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  useEffect(() => {
    if (!props.loading && !props.authenticateError && props.success) {
      setRedirectToReferrer(true);
    }
  }, [props.loading, props.success]);

  const { from } = props.location.state || { from: { pathname: '/' } };

  if (redirectToReferrer) {
    return <Redirect to={from} />
  }

  return (
    <AuthLayout errorMessage={props.error}>
      <LoginForm 
        login={props.login} 
        loading={props.loading} 
        success={props.success}
        error={props.error}
        clearLoginError={props.clearLoginError} />
    </AuthLayout>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loginReducer.loading,
    error: state.loginReducer.error,
    success: state.loginReducer.success,
    authenticateError: state.authReducer.error
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    login,
    clearLoginError
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
