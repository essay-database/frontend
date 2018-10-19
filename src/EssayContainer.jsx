import React from 'react';
import PropTypes from 'prop-types';
import Essay from './Essay';
import Featured from './Featured';
import Sidebar from './Sidebar';
import { ESSAYS_SHAPE } from './constants';

const EssayContainer = ({
  essay: {
    prompt,
    college,
    country,
    dateUploaded,
    yearApplied,
    applicationStatus,
    imageLink,
    paragraphs,
    author,
    facebookShareLink,
    twitterShareLink
  },
  popularEssays,
  latestEssays,
  featuredEssays
}) => {
  return (
    <div className="uk-grid" uk-grid="">
      <div className="uk-width-1-6">
        <Sidebar
          facebookShareLink={facebookShareLink}
          twitterShareLink={twitterShareLink}
        />
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
        <Sidebar
          horizontal
          facebookShareLink={facebookShareLink}
          twitterShareLink={twitterShareLink}
        />
        {[popularEssays, latestEssays, featuredEssays].map((essays, idx) => (
          <Featured key={idx} essays={essays} />
        ))}
      </div>
      <div className="uk-width-1-6" />
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
