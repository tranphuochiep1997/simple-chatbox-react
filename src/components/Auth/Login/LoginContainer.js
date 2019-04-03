import React, { useEffect } from 'react';
import LoginForm from './LoginForm';
import AuthLayout from '../AuthLayout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, clearLoginError } from './LoginAction';

const LoginContainer = (props) => {
  useEffect(() => {
    if (!props.loading && props.success) {
      props.history.push('/');
    }
  }, [props.loading, props.success]);

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
    success: state.loginReducer.success
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    login,
    clearLoginError
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
