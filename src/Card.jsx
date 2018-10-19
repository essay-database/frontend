import React from 'react';
import PropTypes from 'prop-types';
import './styles/card.css';

const WIDTH = 400;
const HEIGHT = (WIDTH * 2) / 3;

const Card = ({ tag, text, linkEssay, imageLink }) => (
  <a href={linkEssay} className="uk-link-reset">
    <div className="uk-card uk-card-default">
      <div className="uk-card-media-top">
        <div className="uk-inline uk-cover-container">
          <img src={imageLink} uk-cover="" alt="" />

          {tag && (
            <div className="uk-overlay uk-light uk-position-top-right">
              <p className="card uk-text-small uk-text-capitalize">{tag}</p>
            </div>
          )}
          <canvas width={WIDTH} height={HEIGHT} />
        </div>
      </div>
      <div className="uk-card-body uk-padding-small">
        <p>{text}</p>
      </div>
    </div>
  </a>
);

Card.propTypes = {
  tag: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkEssay: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired
};

export default Card;
