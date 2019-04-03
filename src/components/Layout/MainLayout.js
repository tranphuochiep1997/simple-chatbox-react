import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import AppHeader from './AppHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../Auth/AuthAction';

const MainLayout = (props) => {

  const onLogout = (event) => {
    event.preventDefault();
    props.logout();
    props.history.replace('/login');
  }

  return (
    <React.Fragment>
      <AppHeader onLogout={onLogout} user={props.user} />
      <Switch>
        {
          routes.map((route, index) => {
            if (route.component) {
              return <Route key={index} exact={route.exact} path={route.path} component={route.component} />;
            }

            return null;
          })
        }
      </Switch>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    logout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
