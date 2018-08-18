import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Open from "./Open";
import Match from "./Match";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Open} />
      <Route path="/cats/:catId" component={App} />
      <Route path="/match" component={Match} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;