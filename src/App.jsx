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
import { shuffleSelect } from "./utils";
import ESSAYS from "./data/essays";
import "./styles/app.css";

const NUM_FEATURED = 3;

function EssayContainerWrapper({ match, essays }) {
  const essay = essays.find(essay => essay.id === match.params.id);
  if (!essay) return <StaticPages.PageNotFound />;
  let featuredEssays = essays.filter(essay => essay.tag === "featured");
  featuredEssays = shuffleSelect(featuredEssays, NUM_FEATURED);
  return <EssayContainer essay={essay} featuredEssays={featuredEssays} />;
}

export default () => (
  <Router>
    <div id="app">
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Grid essays={ESSAYS} />} />} />
        <Route exact path="/about" component={StaticPages.About} />
        <Route exact path="/contact" component={StaticPages.Contact} />
        <Route exact path="/advertise" component={StaticPages.Advertise} />
        <Route exact path="/terms" component={StaticPages.Terms} />
        <Route exact path="/privacy" component={StaticPages.Privacy} />
        <Route exact path="/help" component={StaticPages.Help} />
        <Route exact path="/essays" render={() => <Redirect to="/" />} />
        <Route
          exact
          path="/:id"
          render={props => <EssayContainerWrapper {...props} essays={ESSAYS} />}
        />
        <Route component={StaticPages.PageNotFound} />
      </Switch>
    </div>
  </Router>
);
