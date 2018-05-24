import React from "react";

import Essay from "./Essay";
import Iconsbar from "./Iconsbar";
import Sidebar from "./Sidebar";

import essayDefault from "./seed/essay";

export default ({
  essay = essayDefault,
  relatedArticles = [],
  mostViewedArticles = [],
  mostCommentedArticles = []
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
        />
      </div>
    </div>
  );
};
