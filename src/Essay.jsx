import React from 'react';
import PropTypes from 'prop-types';
import Details from './Details';
import Image from './Image';

const Essay = ({
  paragraphs,
  prompt,
  author,
  college,
  country,
  dateUploaded,
  applicationStatus,
  yearApplied,
  imagePromise
}) => {
  return (
    <div className="uk-padding-small">
      <article className="uk-article">
        <h2 className="uk-heading-primary">
          <a className="uk-link-text">{prompt}</a>
        </h2>
        <div
          className="uk-margin uk-inline-clip uk-transition-toggle"
          tabIndex="0"
        >
          <Image
            imagePromise={imagePromise}
            classes="uk-transition-scale-up uk-transition-opaque"
          />
        </div>
        <Details
          name={author}
          college={college}
          country={country}
          dateUploaded={dateUploaded}
          applicationStatus={applicationStatus}
          yearApplied={yearApplied}
        />
        <div className="uk-text-left">
          {paragraphs.map((paragraph, idx) => (
            <p
              key={idx}
              className={idx === 0 ? 'uk-dropcap uk-text-lead' : null}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
};

Essay.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  prompt: PropTypes.string,
  imagePromise: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  college: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  dateUploaded: PropTypes.object.isRequired,
  applicationStatus: PropTypes.string.isRequired,
  yearApplied: PropTypes.number.isRequired
};
export default Essay;
