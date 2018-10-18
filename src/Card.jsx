import React from 'react';
import PropTypes from 'prop-types';
import './styles/card.css';

const Card = ({ tag, text, linkEssay, linkImage, width, height }) => (
  <div className="uk-card uk-card-default">
    <div className="uk-card-media-top">
      <div className="uk-inline uk-cover-container">
        <img src={linkImage} alt="" uk-cover="" />
        {tag && (
          <div className="uk-overlay uk-light uk-position-top-right">
            <p className="card uk-text-small uk-text-capitalize">{tag}</p>
          </div>
        )}
        <canvas width={width} height={height} />
      </div>
    </div>
    <div className="uk-card-body uk-padding-small">
      <p>
        <a href={linkEssay} className="uk-link-reset">
          {text}
        </a>
      </p>
    </div>
  </div>
);

Card.propTypes = {
  tag: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkEssay: PropTypes.string.isRequired,
  linkImage: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ]).isRequired,
  height: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ]).isRequired
};

export default Card;
