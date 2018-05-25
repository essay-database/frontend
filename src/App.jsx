import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import EssayContainer from "./EssayContainer";
import Grid from "./Grid";
import Nav from "./Nav";
import StaticPages from "./static";

import essays from "./seed/essays";
import "./styles/app.css";

const TermsAndPrivacy = () => (
  <div>
    <StaticPages.Terms />
    <StaticPages.Privacy />
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
          <Route exact path="/about" component={StaticPages.About} />
          <Route exact path="/contact" component={StaticPages.Contact} />
          <Route exact path="/advertise" component={StaticPages.Advertise} />
          <Route exact path="/terms" component={TermsAndPrivacy} />
          <Route exact path="/help" component={StaticPages.Help} />
        </Switch>
      </div>
    </div>
  </Router>
);
