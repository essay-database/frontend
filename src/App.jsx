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
import {
  About,
  Contact,
  Advertise,
  Terms,
  Privacy,
  Help,
  PageNotFound
} from "./staticPages";
import "./styles/app.css";

export default () => (
  <Router>
    <div id="app">
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/essays" />} />
        <Route exact path="/essays" component={Grid} />
        <Route exact path="/essays/:id" component={EssayContainer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/advertise" component={Advertise} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/help" component={Help} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
);
