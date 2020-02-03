import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import User from './pages/User';
import Table from './pages/Table';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/user/:slug' component={User} />
      <Route path='/table' component={Table} />
    </Switch>
  </BrowserRouter>
);

export default Routes;