import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import EssayContainer from './EssayContainer';
import Grid from './Grid';
import Nav from './Nav';
import StaticPages from './staticPages';
import essays from './data/essays';
import './styles/app.css';

function getSideEssays(essays) {
  const featured = [];
  const popular = [];
  const latest = [];
  essays.forEach(essay => {
    const { tag } = essay;
    if (tag === 'new') latest.push(essay);
    else if (tag === 'popular') popular.push(essay);
    else if (tag === 'featured') featured.push(essay);
  });
  return {
    featured,
    latest,
    popular
  };
}

function WrappedEssayContainer({ match }) {
  const essay = essays.find(essay => essay.id === match.params.id);
  if (!essay) {
    return <StaticPages.PageNotFound />;
  }
  const { featured, popular, latest } = getSideEssays(essays);
  return (
    <EssayContainer
      essay={essay}
      featuredEssays={featured}
      popularEssays={popular}
      latestEssays={latest}
    />
  );
}

export default () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/essays" />} />
        <Route exact path="/essays" render={() => <Grid essays={essays} />} />
        <Route exact path="/essays/:id" component={WrappedEssayContainer} />
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
