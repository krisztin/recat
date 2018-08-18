import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Open from './Open';
import Match from './Match';
import CatNotFound from './CatNotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Open} />
      <Route path="/cats/:catId" component={App} />
      <Route path="/match" component={Match} />
      {/* Still to do: cats/non-existent-cat should Route to CatNotFound */}
      <Route component={CatNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
