import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Loadable from 'react-loadable';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const Login = Loadable({
  loader: () => import('./components/Auth/Login/LoginContainer'),
  loading
});

const Register = Loadable({
  loader: () => import('./components/Auth/Register/RegisterContainer'),
  loading
});

const MainLayout = Loadable({
  loader: () => import('./components/Layout/MainLayout'),
  loading
});

const PrivateRoute = Loadable({
  loader: () => import('./components/Auth/PrivateRoute'),
  loading
});

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <PrivateRoute path='/' component={MainLayout} />
        </Switch>
        <ToastContainer draggable={false} />
      </BrowserRouter>
    );
  }
}

export default App;
