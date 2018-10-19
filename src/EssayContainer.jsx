import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Essay from './Essay';
import Featured from './Featured';
import Sidebar from './Sidebar';
import Footer from './Footer';
import CommentsPlaceholder from './CommentsPlaceholder';
import { ESSAYS_SHAPE } from './constants';

const FEATURED_HEADING = 'featured';
const POPULAR_HEADING = 'popular';
const LATEST_HEADING = 'latest';

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
    <Fragment>
      <div className="uk-grid" uk-grid="">
        <div className="uk-width-1-6 uk-flex uk-flex-center uk-visible@m">
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
          <div className="uk-flex uk-flex-right uk-hidden@m">
            <Sidebar
              horizontal
              facebookShareLink={facebookShareLink}
              twitterShareLink={twitterShareLink}
            />
          </div>
          {[
            { essays: featuredEssays, heading: FEATURED_HEADING },
            {
              essays: popularEssays,
              heading: POPULAR_HEADING
            },
            {
              essays: latestEssays,
              heading: LATEST_HEADING
            }
          ].map(({ essays, heading }, idx) => (
            <Featured key={idx} essays={essays} heading={heading} />
          ))}
        </div>
        {/* <div className="uk-width-1-6" /> */}
      </div>
      <CommentsPlaceholder />
      <Footer />
    </Fragment>
  );
};

EssayContainer.propTypes = {
  essay: ESSAYS_SHAPE,
  featuredEssays: PropTypes.arrayOf(ESSAYS_SHAPE).isRequired,
  latestEssays: PropTypes.PropTypes.arrayOf(ESSAYS_SHAPE).isRequired,
  popularEssays: PropTypes.PropTypes.arrayOf(ESSAYS_SHAPE).isRequired
};

export default EssayContainer;
