import React from 'react';
import './App.css';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from "./history";
import withAdminLayout from "./shared/layouts/Admin";
import AboutModule from "./about";
import UsersModule from "./users";
import JobsModule from "./jobs";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/jobs" component={withAdminLayout(JobsModule)}/>
        <Route path="/users" component={withAdminLayout(UsersModule)} />
        <Route path="/about" component={withAdminLayout(AboutModule)} />
        <Route path='*' render={() => <h1>Not found!</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
