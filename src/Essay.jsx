import React from 'react';
import PropTypes from 'prop-types';
import Details from './Details';
import Image from './Image';

const Essay = ({
  paragraphs,
  prompt,
  name,
  college,
  country,
  dateUploaded,
  applicationStatus,
  yearApplied,
  imageLink
}) => {
  return (
    <div className="uk-padding-small">
      <article className="uk-article">
        <h2 className="uk-heading-primary">
          <a href={linkBasedOnPrompt} className="uk-link-text">
            {prompt}
          </a>
        </h2>
        <div
          className="uk-margin uk-inline-clip uk-transition-toggle"
          tabIndex="0"
        >
          <Image
            width={1600}
            height={800}
            className="uk-transition-scale-up uk-transition-opaque"
            imageNo={imageNo}
          />
        </div>
        <Details
          name={name}
          college={college}
          country={country}
          dateUploaded={dateUploaded}
          applicationStatus={applicationStatus}
          yearApplied={yearApplied}
        />
        <div className="uk-text-justify">
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
  details: PropTypes.shape({
    prompt: PropTypes.string.isRequired,
    imageNo: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    dateUploaded: PropTypes.object.isRequired,
    applicationStatus: PropTypes.string.isRequired,
    yearApplied: PropTypes.number.isRequired,
    college: PropTypes.string.isRequired,
    linkBasedOnPrompt: PropTypes.string.isRequired,
    linkBasedOnAuthor: PropTypes.string.isRequired,
    linkBasedOnYearApplied: PropTypes.string.isRequired,
    linkBasedOnCountry: PropTypes.string.isRequired,
    linkBasedOnApplicationStatus: PropTypes.string.isRequired,
    linkBasedOnCollege: PropTypes.string.isRequired
  }).isRequired
};
export default Essay;
