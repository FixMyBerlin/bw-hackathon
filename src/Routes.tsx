import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Home = () => <p>Hallo Welt</p>;

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Redirect to='/' />
  </Switch>
);

export default Routes;
