import React from 'react';
import PropTypes from 'prop-types';
import { HEIGHT_WIDTH_RATIO } from './constants';
import './styles/card.css';

const WIDTH = 640;
const RATIO = 1 / 2;
const HEIGHT = WIDTH * RATIO;

const Card = ({ tag, text, linkEssay, imageLink }) => (
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
    <div className="uk-card-footer uk-padding-small">
      <div className="uk-flex uk-flex-between uk-flex-middle">
        <div>status</div>
        <div>college</div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string.isRequired,
  linkEssay: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired
};

export default Card;
