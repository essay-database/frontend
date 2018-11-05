import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import EssayContainer from "./EssayContainer";
import Grid from "./Grid";
import Nav from "./Nav";
import StaticPages from "./staticPages";
import "./styles/app.css";

export default () => (
  <Router>
    <div id="app">
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/essays" />} />
        <Route exact path="/essays" component={Grid} />
        <Route exact path="/essays/:id" component={EssayContainer} />
        <Route exact path="/about" component={StaticPages.About} />
        <Route exact path="/contact" component={StaticPages.Contact} />
        <Route exact path="/advertise" component={StaticPages.Advertise} />
        <Route exact path="/terms" component={StaticPages.Terms} />
        <Route exact path="/privacy" component={StaticPages.Privacy} />
        <Route exact path="/help" component={StaticPages.Help} />
        <Route component={StaticPages.PageNotFound} />
      </Switch>
    </div>
  </Router>
);
