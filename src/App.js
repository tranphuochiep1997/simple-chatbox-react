import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import './App.css';
import { toast } from 'react-toastify';

const Login = React.lazy(() => import('./components/Auth/Login/LoginContainer'));
const Register = React.lazy(() => import('./components/Auth/Register/RegisterContainer'));
const MainLayout = React.lazy(() => import('./components/Layout/MainLayout'));

toast.configure({
  autoClose: 5000,
  draggable: false
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route path='/' component={MainLayout} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
