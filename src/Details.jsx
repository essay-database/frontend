import React from 'react';
import PropTypes from 'prop-types';
import './styles/details.css';

const Details = ({
  author,
  country,
  dateUploaded,
  applicationStatus,
  yearApplied,
  college
}) => (
  <div className="uk-article-meta">
    <div className="uk-flex uk-flex-between">
      <div>
        <p className="uk-margin-remove-bottom uk-text-capitalize">
          <span className="uk-link-text link link">{author}</span>
          {author && country && ' | '}
          <span className="uk-link-text link">{country}</span>
        </p>
      </div>
      <div>
        <p className="uk-margin-remove-bottom">{dateUploaded}</p>
      </div>
    </div>
    <div className="uk-flex uk-flex-between">
      <div>
        <p className="uk-text-capitalize">
          <span className="uk-link-text link">{college}</span>
          {college && yearApplied && ' | '}
          <span className="uk-link-text link">{yearApplied}</span>
        </p>
      </div>
      <div>
        <p className="uk-text-capitalize">
          <span className="uk-link-text link">{applicationStatus}</span>
        </p>
      </div>
    </div>
  </div>
);

Details.propTypes = {
  author: PropTypes.string.isRequired,
  college: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  dateUploaded: PropTypes.object.isRequired,
  applicationStatus: PropTypes.string.isRequired,
  yearApplied: PropTypes.number.isRequired
};

export default Details;
