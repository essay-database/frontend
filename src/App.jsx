import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EssayContainer from './EssayContainer';
import Grid from './Grid';
import Nav from './Nav';
import StaticPages from './staticPages';
import essays from './data/essays';
import './styles/app.css';

function getSideEssays(essays) {
  const featured = [];
  const popular = [];
  const _new = [];
  essays.forEach(essay => {
    const { tag } = essay;
    if (tag === 'new') _new.push(essay);
    else if (tag === 'popular') popular.push(essay);
    else if (tag === 'featured') featured.push(essay);
  });
  return {
    featured,
    _new,
    popular
  };
}

function WrappedEssayContainer({ match }) {
  const essay = essays.find(e => e.id === parseInt(match.params.id, 10));
  if (!essay) {
    return <StaticPages.PageNotFound />;
  }
  const { featured, popular, _new } = getSideEssays(essays);
  return (
    <EssayContainer
      essay={essay}
      feauturedEssays={featured}
      popularEssays={popular}
      latestEssays={_new}
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
          <Route exact path="/terms" component={StaticPages.Terms} />
          <Route exact path="/privacy" component={StaticPages.Privacy} />
          <Route exact path="/help" component={StaticPages.Help} />
        </Switch>
      </div>
    </div>
  </Router>
);
