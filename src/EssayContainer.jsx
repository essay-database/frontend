import React from 'react';
import PropTypes from 'prop-types';
import Essay from './Essay';
import Iconsbar from './Iconsbar';
import Sidebar from './Sidebar';
import essayDefault from './data/essay';
import { ESSAYS_SHAPE } from './constants';

const EssayContainer = ({
  essay = essayDefault,
  relatedArticles = [],
  mostViewedArticles = [],
  mostCommentedArticles = [],
  about = 'about essay database'
}) => {
  const {
    links: {
      linkTwitterShare,
      linkFacebookShare,
      linkBasedOnApplicationStatus,
      linkBasedOnAuthor,
      linkBasedOnYearApplied,
      linkBasedOnCountry,
      linkBasedOnCollege,
      linkBasedOnPrompt
    },
    meta: {
      prompt,
      college,
      dateUploaded,
      yearApplied,
      applicationStatus,
      commentsCount,
      views,
      imageNo
    },
    paragraphs,
    author: { name, country }
  } = essay;
  return (
    <div className="uk-grid" uk-grid="">
      <div className="uk-width-auto uk-visible@m uk-margin-left">
        <Iconsbar
          ori="v"
          views={views}
          linkFacebookShare={linkFacebookShare}
          linkTwitterShare={linkTwitterShare}
        />
      </div>
      <div className="uk-width-expand">
        <Essay
          paragraphs={paragraphs}
          details={{
            prompt,
            imageNo,
            name,
            country,
            dateUploaded,
            applicationStatus,
            yearApplied,
            college,
            linkBasedOnAuthor,
            linkBasedOnYearApplied,
            linkBasedOnCountry,
            linkBasedOnApplicationStatus,
            linkBasedOnCollege,
            linkBasedOnPrompt
          }}
        />
        <Iconsbar
          ori="h"
          linkFacebookShare={linkFacebookShare}
          linkTwitterShare={linkTwitterShare}
          commentsCount={commentsCount}
          views={views}
        />
      </div>
      <div className="uk-width-1-1 uk-width-1-4@m">
        <Sidebar
          relatedArticles={relatedArticles}
          mostViewedArticles={mostViewedArticles}
          mostCommentedArticles={mostCommentedArticles}
          about={about}
        />
      </div>
    </div>
  );
};

EssayContainer.propTypes = {
  essay: ESSAYS_SHAPE,
  relatedArticles: PropTypes.arrayOf(ESSAYS_SHAPE).isRequired,
  mostViewedArticles: PropTypes.PropTypes.arrayOf(ESSAYS_SHAPE).isRequired,
  mostCommentedArticles: PropTypes.PropTypes.arrayOf(ESSAYS_SHAPE).isRequired,
  about: PropTypes.string.isRequired
};

export default EssayContainer;
