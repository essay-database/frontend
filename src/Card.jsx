import React from 'react';
import PropTypes from 'prop-types';
import './styles/card.css';

const WIDTH = 640;
const RATIO = 1 / 2;
const HEIGHT = WIDTH * RATIO;

const selectLabel = status => {
  let classname = 'uk-label-';
  switch (status) {
    case 'accepted':
      classname += 'success';
      break;
    case 'rejected':
      classname += 'danger';
      break;
    case 'waitlisted':
      classname += 'warning';
      break;
    case 'pending':
      classname += 'default';
      break;
    default:
      classname += 'default';
      break;
  }
  return classname;
};

const LABEL_LIMIT = 35;
const truncate = label =>
  label.length > LABEL_LIMIT ? label.substring(0, LABEL_LIMIT) + '...' : label;

const Card = ({
  tag,
  text,
  linkEssay,
  imageLink,
  applicationStatus,
  college
}) => (
  <div className="uk-card uk-card-default uk-box-shadow-hover-large">
    <div className="uk-card-media-top">
      <a href={linkEssay} className="uk-link-reset">
        <div className="uk-inline uk-cover-container">
          <img data-src={imageLink} uk-cover="" alt="" uk-img="" />
          {tag && (
            <div className="uk-overlay uk-light uk-position-top-right">
              <p className="card uk-text-small uk-text-capitalize">{tag}</p>
            </div>
          )}
          <canvas width={WIDTH} height={HEIGHT} />
        </div>
      </a>
    </div>
    <div className="uk-card-body uk-padding-small">
      <p>
        <a href={linkEssay} className="uk-link-reset">
          {text}
        </a>
      </p>
    </div>
    {(applicationStatus || college) && (
      <div className="uk-card-footer uk-padding-small">
        <div
          className="uk-flex uk-flex-between uk-flex-middle uk-text-small"
          uk-margin=""
        >
          {applicationStatus && (
            <div className="uk-margin-small-right">
              <p
                className={`uk-margin-remove uk-text-capitalize uk-label ${selectLabel(
                  applicationStatus
                )}`}
              >
                {applicationStatus}
              </p>
            </div>
          )}
          {college && (
            <div>
              <p className="uk-margin-remove uk-badge">{truncate(college)}</p>
            </div>
          )}
        </div>
      </div>
    )}
  </div>
);

Card.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string.isRequired,
  linkEssay: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  college: PropTypes.string,
  applicationStatus: PropTypes.string
};

export default Card;
