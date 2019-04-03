import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticate } from './AuthAction';

const Loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const PrivateRoute = ({ waiting, authenticated, error, authenticate, component: Component, ...rest }) => {

  useEffect(() => {
    if (waiting) {
      authenticate();
    }
  }, []);

  return (
    <Route {...rest} render={props => {
      if (waiting) {
        return <Loading />
      }

      if (authenticated) {
        return <Component {...props} />
      }

      return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }} />
  );
}

const mapStateToProps = state => {
  return {
    waiting: state.authReducer.waiting,
    error: state.authReducer.error,
    authenticated: state.authReducer.authenticated
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    authenticate
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
