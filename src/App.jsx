import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import EssayContainer from "./EssayContainer";
import Grid from "./Grid";
import Nav from "./Nav";

import Contact from "./static/Contact";
import About from "./static/About";
import Advertise from "./static/Advertise";
import Privacy from "./static/Privacy";
import Terms from "./static/Terms";
import Help from "./static/Help";

import essays from "./seed/essays";
import "./styles/app.css";

const TermsAndPrivacy = () => (
  <div>
    <Terms />
    <Privacy />
  </div>
);

function WrappedEssayContainer({ match }) {
  const essay = essays.find(e => e.id == match.params.id);
  if (!essay) {
    console.error(`could not find essay`);
  }

  const relatedArticles = essays.slice(0, 3);
  const mostViewedArticles = essays.slice(0, 3);
  const mostCommentedArticles = essays.slice(0, 3);

  return (
    <EssayContainer
      essay={essay}
      relatedArticles={relatedArticles}
      mostViewedArticles={mostViewedArticles}
      mostCommentedArticles={mostCommentedArticles}
    />
  );
}

export default () => (
  <Router>
    <div>
      <Nav />
      <div className="uk-padding-small">
        <Switch>
          <Route exact path="/" render={() => <Grid essays={essays} />} />
          <Route exact path="/essays/:id" component={WrappedEssayContainer} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/advertise" component={Advertise} />
          <Route exact path="/terms" component={TermsAndPrivacy} />
          <Route exact path="/help" component={Help} />
        </Switch>
      </div>
    </div>
  </Router>
);
