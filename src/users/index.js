import React from "react";
import { Switch, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";

export default ({ match: { url } }) => {
  return (
    <Switch>
      <Route exact path={`${url}/`} component={UserPage}></Route>
    </Switch>
  );
};
