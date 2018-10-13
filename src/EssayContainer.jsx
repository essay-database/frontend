import React from 'react';
import PropTypes from 'prop-types';
import Essay from './Essay';
import Iconsbar from './Iconsbar';
import Sidebar from './Sidebar';
import essayDefault from './seed/essay';

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

const ESSAYS_SHAPE = PropTypes.shape({
  id: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  meta: PropTypes.shape({
    tag: PropTypes.string.isRequired,
    prompt: PropTypes.string.isRequired,
    college: PropTypes.string.isRequired,
    yearApplied: PropTypes.number.isRequired,
    applicationStatus: PropTypes.string.isRequired,
    dateUploaded: PropTypes.object.isRequired,
    views: PropTypes.number.isRequired,
    commentsCount: PropTypes.number.isRequired,
    imageNo: PropTypes.object.isRequired
  }),
  links: PropTypes.shape({
    linkFacebookShare: PropTypes.string.isRequired,
    linkTwitterShare: PropTypes.string.isRequired,
    linkBasedOnAuthor: PropTypes.string.isRequired,
    linkBasedOnYearApplied: PropTypes.string.isRequired,
    linkBasedOnCountry: PropTypes.string.isRequired,
    linkBasedOnApplicationStatus: PropTypes.string.isRequired,
    linkBasedOnCollege: PropTypes.string.isRequired,
    linkBasedOnPrompt: PropTypes.string.isRequired
  }),
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
  }).isRequired
}).isRequired;

EssayContainer.propTypes = {
  essay: ESSAYS_SHAPE,
  relatedArticles: PropTypes.arrayOf(ESSAYS_SHAPE).isRequired,
  mostViewedArticles: PropTypes.PropTypes.arrayOf(ESSAYS_SHAPE).isRequired,
  mostCommentedArticles: PropTypes.PropTypes.arrayOf(ESSAYS_SHAPE).isRequired,
  about: PropTypes.string.isRequired
};

export default EssayContainer;
