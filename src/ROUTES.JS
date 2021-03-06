import React from "react";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NotFound from "./containers/NotFound";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
<Route exact path="/login">
  <Login />
</Route>
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup">
  <Signup />
</Route>
      <Route>
  <NotFound />
</Route>
    </Switch>
  );
}