import React from 'react';
import Card from './Card';

const WIDTH = 400;
const HEIGHT = (WIDTH * 2) / 3;

export default () => (
  <div class="uk-section">
    <div class="uk-container uk-container-expand">
      <div uk-slider="center: true; autoplay: true; autoplay-interval: 3000">
        <div class="uk-position-relative">
          <div class="uk-slider-container">
            <ul class="uk-slider-items uk-grid uk-grid-small uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-child-width-1-6@xl">
              {[...Array(10).keys()].map(i => (
                <li key={i}>
                  <Card
                    width={WIDTH}
                    height={HEIGHT}
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  />
                </li>
              ))}
            </ul>
            <ul />
          </div>
          <div class="uk-hidden@s uk-light">
            <a
              class="uk-position-center-left uk-position-small"
              href="#"
              uk-slidenav-previous=""
              uk-slider-item="previous"
            />
            <a
              class="uk-position-center-right uk-position-small"
              href="#"
              uk-slidenav-next=""
              uk-slider-item="next"
            />
          </div>
          <div class="uk-visible@s">
            <a
              class="uk-position-center-left-out uk-position-small"
              href="#"
              uk-slidenav-previous=""
              uk-slider-item="previous"
            />
            <a
              class="uk-position-center-right-out uk-position-small"
              href="#"
              uk-slidenav-next=""
              uk-slider-item="next"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

{
  /* <a href={`/essays/${essay.id}`} className="uk-link-text">
              <ClampLines
                text={essay.paragraphs.join(' ')}
                lines={numLines}
                buttons={false}
                debounce={debounceBy}
              />
            </a> */
}
