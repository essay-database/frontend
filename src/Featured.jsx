import React from 'react';
import Card from './Card';

const SMALL_BOUNDARY = 640;
const WIDTH = 400;
const HEIGHT = (WIDTH * 2) / 3;

export default class extends React.Component {
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
