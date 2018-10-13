import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DATE_FORMAT } from './constants';
import './styles/details.css';

const Details = ({
  name = 'author',
  country = 'country',
  dateUploaded = moment(),
  applicationStatus = 'deferred',
  yearApplied = 1970,
  college = 'college',
  linkBasedOnAuthor = '',
  linkBasedOnYearApplied = '',
  linkBasedOnCountry = '',
  linkBasedOnApplicationStatus = '',
  linkBasedOnCollege = ''
}) => (
  <div className="uk-article-meta">
    <div className="uk-flex uk-flex-between">
      <div>
        <p className="uk-margin-remove-bottom uk-text-capitalize">
          <a href={linkBasedOnAuthor} className="uk-link-text link link">
            {name}
          </a>
          {name && country && ' | '}
          <a href={linkBasedOnCountry} className="uk-link-text link">
            {country}
          </a>
        </p>
      </div>
      <div>
        <p className="uk-margin-remove-bottom">
          {dateUploaded.format(DATE_FORMAT)}
        </p>
      </div>
    </div>

    <div className="uk-flex uk-flex-between">
      <div>
        <p className="uk-text-capitalize">
          <a href={linkBasedOnCollege} className="uk-link-text link">
            {college}
          </a>
          {college && yearApplied && ' | '}
          <a href={linkBasedOnYearApplied} className="uk-link-text link">
            {yearApplied}
          </a>
        </p>
      </div>
      <div>
        <p className="uk-text-capitalize">
          <a href={linkBasedOnApplicationStatus} className="uk-link-text link">
            {applicationStatus}
          </a>
        </p>
      </div>
    </div>
  </div>
);

Details.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  dateUploaded: PropTypes.object.isRequired,
  applicationStatus: PropTypes.string.isRequired,
  yearApplied: PropTypes.number.isRequired,
  college: PropTypes.string.isRequired,
  linkBasedOnAuthor: PropTypes.string.isRequired,
  linkBasedOnCollege: PropTypes.string.isRequired,
  linkBasedOnCountry: PropTypes.string.isRequired,
  linkBasedOnYearApplied: PropTypes.string.isRequired,
  linkBasedOnApplicationStatus: PropTypes.string.isRequired
};

export default Details;
