import React, { useEffect, useState } from 'react';
import LoginForm from './LoginForm';
import AuthLayout from '../AuthLayout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, clearError } from '../AuthAction';
import { Redirect } from 'react-router-dom';

const LoginContainer = (props) => {

  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  useEffect(() => {
    if (!props.loading && props.authenticated) {
      setRedirectToReferrer(true);
    }
  }, [props.loading, props.authenticated]);

  const { from } = props.location.state || { from: { pathname: '/' } };

  if (redirectToReferrer) {
    return <Redirect to={from} />
  }

  return (
    <AuthLayout errorMessage={props.error}>
      <LoginForm
        login={props.login}
        loading={props.loading}
        authenticated={props.authenticated}
        error={props.error}
        clearError={props.clearError} />
    </AuthLayout>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.authReducer.loading,
    error: state.authReducer.error,
    authenticated: state.authReducer.authenticated
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    login,
    clearError
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
