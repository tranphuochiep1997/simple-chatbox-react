import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import AppHeader from './AppHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../Auth/AuthAction';

const Loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

const MainLayout = (props) => {

  const onLogout = (event) => {
    event.preventDefault();
    props.logout();
    props.history.replace('/login');
  }

  return (
    <div className='app'>
      <AppHeader onLogout={onLogout} user={props.user} />
      <div className='app-body'>
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </div>
    </div>
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
