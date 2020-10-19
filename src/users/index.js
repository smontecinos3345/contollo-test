import React from "react";
import { Switch, Route } from "react-router-dom";
export default ({ match: { url } }) => {
  return (
    <Switch>
      <Route exact path={`${url}/`} render={() => <h1>I'm the users module</h1>}></Route>
    </Switch>
  );
};
