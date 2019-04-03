import React, { useEffect } from 'react';
import RegisterForm from './RegisterForm';
import AuthLayout from '../AuthLayout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { register, clearRegisterError } from './RegisterAction';

const RegisterContainer = (props) => {
  useEffect(() => {
    if (!props.loading && props.success) {
      props.history.push('/login');
    }
  }, [props.loading, props.success]);

  return (
    <AuthLayout errorMessage={props.error}>
      <RegisterForm 
        register={props.register} 
        loading={props.loading} 
        success={props.success}
        error={props.error}
        clearRegisterError={props.clearRegisterError} />
    </AuthLayout>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.registerReducer.loading,
    error: state.registerReducer.error,
    success: state.registerReducer.success
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    register,
    clearRegisterError
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
