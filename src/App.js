import React from 'react';
import './App.css';
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { history } from "./history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/jobs" render={() => <h1>Hello, world!</h1>} />
        <Route path='*' render={() => <h1>Not found!</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
