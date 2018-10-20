import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { ESSAYS_SHAPE } from './constants';

const Featured = ({ essays, heading }) => (
  <div className="uk-section uk-padding-remove-vertical">
    <div className="uk-container uk-container-expand">
      <h3 className="uk-text-uppercase uk-text-small uk-text-bold uk-heading-divider">
        {heading}
      </h3>
      <div uk-slider="center: true; autoplay: true; autoplay-interval: 3000">
        <div className="uk-position-relative">
          <div className="uk-slider-container">
            <ul
              className="uk-slider-items uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@l"
              uk-grid=""
            >
              {essays.map(({ id, paragraphs, tag, imageLink }) => (
                <li key={id}>
                  <Card
                    tag={tag}
                    text={paragraphs[0]}
                    linkEssay={`/essays/${id}`}
                    imageLink={imageLink}
                  />
                </li>
              ))}
            </ul>
            <ul />
          </div>
          <div className="uk-hidden@s uk-light">
            <a
              className="uk-position-center-left uk-position-small"
              uk-slidenav-previous=""
              uk-slider-item="previous"
            />
            <a
              className="uk-position-center-right uk-position-small"
              uk-slidenav-next=""
              uk-slider-item="next"
            />
          </div>
          <div className="uk-visible@s">
            <a
              className="uk-position-center-left-out uk-position-small"
              uk-slidenav-previous=""
              uk-slider-item="previous"
            />
            <a
              className="uk-position-center-right-out uk-position-small"
              uk-slidenav-next=""
              uk-slider-item="next"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

Featured.propTypes = {
  essays: PropTypes.arrayOf(ESSAYS_SHAPE).isRequired,
  heading: PropTypes.string.isRequired
};

export default Featured;
