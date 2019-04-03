import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';

const MainLayout = () => {
  return (
    <Switch>
      {
        routes.map((route, index) => {
          if (route.component) {
            return <Route key={index} exact={route.exact} path={route.path} component={route.component}/>;
          }

          return null;
        })
      }
    </Switch>
  ); 
}

export default MainLayout;
