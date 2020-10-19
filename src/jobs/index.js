import React from "react";
import { Switch, Route } from "react-router-dom";
import JobPage from "./pages/JobPage";

export default ({ match: { url } }) => {
  return (
    <Switch>
      <Route exact path={`${url}/`} component={JobPage}></Route>
    </Switch>
  );
};
