import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { ESSAYS_SHAPE } from './constants';

const SMALL_BOUNDARY = 640;
const WIDTH = 400;
const HEIGHT = (WIDTH * 2) / 3;

export default class Featured extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMobileLarge: false
    };
  }

  isMobile(width) {
    return width > WIDTH && width < SMALL_BOUNDARY;
  }

  componentDidMount = () => {
    window.addEventListener('resize', () => {
      if (this.isMobile(window.innerWidth)) {
        this.setState({
          isMobileLarge: true
        });
      }
    });
  };

  render() {
    return (
      <div className="uk-section">
        <div className="uk-container uk-container-expand">
          <div uk-slider="center: true; autoplay: true; autoplay-interval: 3000">
            <div className="uk-position-relative">
              <div className="uk-slider-container">
                <ul
                  className={`uk-slider-items uk-grid uk-grid-small ${
                    this.state.isMobileLarge
                      ? 'uk-child-width-1-2'
                      : 'uk-child-width-1-1'
                  } uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-child-width-1-6@xl`}
                >
                  {this.props.essays.map(
                    ({ id, paragraphs, tag, imageLink }) => (
                      <li key={id}>
                        <Card
                          tag={tag}
                          width={WIDTH}
                          height={HEIGHT}
                          text={paragraphs[0]}
                          linkEssay={`/essays/${id}`}
                          imageLink={imageLink}
                        />
                      </li>
                    )
                  )}
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
  }
}

Featured.propTypes = {
  essays: PropTypes.arrayOf(ESSAYS_SHAPE).isRequired
};
