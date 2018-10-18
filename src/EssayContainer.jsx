import React from 'react';
import PropTypes from 'prop-types';
import Essay from './Essay';
import Featured from './Featured';
import Sidebar from './Sidebar';
import { ESSAYS_SHAPE } from './constants';

const EssayContainer = ({
  essay,
  popularEssays,
  latestEssays,
  featuredEssays
}) => {
  const {
    prompt,
    college,
    country,
    dateUploaded,
    yearApplied,
    applicationStatus,
    imageLink,
    paragraphs,
    author
  } = essay;
  return (
    <div className="uk-grid" uk-grid="">
      <div className="uk-width-1-6 uk-visible@m">
        <Sidebar />
      </div>
      <div className="uk-width-2-3">
        <Essay
          paragraphs={paragraphs}
          prompt={prompt}
          imageLink={imageLink}
          author={author}
          college={college}
          country={country}
          dateUploaded={dateUploaded}
          applicationStatus={applicationStatus}
          yearApplied={yearApplied}
        />
        {[popularEssays, latestEssays, featuredEssays].map((essays, idx) => (
          <Featured key={idx} essays={essays} />
        ))}
        <div>
          <div className="uk-margin-top uk-margin-bottom">
            <div className="uk-margin">
              <h3 className="uk-heading-divider">Related</h3>
              <Featured list={popularEssays} />
            </div>
            <div className="uk-margin">
              <h3 className="uk-heading-divider">Most Views</h3>
              <Featured list={featuredEssays} />
            </div>
            <div className="uk-margin">
              <h3 className="uk-heading-divider">Most Comments</h3>
              <Featured list={latestEssays} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="uk-width-1-6" /> */}
    </div>
  );
};

EssayContainer.propTypes = {
  essay: ESSAYS_SHAPE,
  featuredEssays: PropTypes.arrayOf(ESSAYS_SHAPE).isRequired,
  latestEssays: PropTypes.PropTypes.arrayOf(ESSAYS_SHAPE).isRequired,
  popularEssays: PropTypes.PropTypes.arrayOf(ESSAYS_SHAPE).isRequired
};

export default EssayContainer;
