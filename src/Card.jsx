import React from 'react';
import PropTypes from 'prop-types';
import ClampLines from 'react-clamp-lines';
import Icons from './Icons';
import Image from './Image';
import './styles/card.css';

const ICON_SIZE = 1.25;
const CLAMP_LINES = 7;
const DEBOUNCE_RATE = 100;

const Card = ({
  tag = 'new',
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec ullamcorper. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. In fermentum et sollicitudin ac orci. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Aenean et tortor at risus. Sit amet luctus venenatis lectus magna. Viverra nam libero justo laoreet sit amet cursus. Eu turpis egestas pretium aenean pharetra magna. Ac odio tempor orci dapibus ultrices.',
  views = 0,
  readMoreLink = '#',
  imageNo = 0
}) => (
  <div className="uk-card uk-card-default uk-box-shadow-hover-xlarge">
    <div className="uk-card-media-top">
      <div className="uk-inline">
        <Image
          width="800"
          height="400"
          essayLink={readMoreLink}
          imageNo={imageNo}
        />
        {tag && (
          <div className="uk-overlay uk-light uk-position-top-right">
            <p className="card uk-text-small uk-text-capitalize">{tag}</p>
          </div>
        )}
      </div>
    </div>
    <div className="uk-card-body uk-drag">
      <ClampLines
        text={text}
        lines={CLAMP_LINES}
        ellipsis="..."
        buttons={false}
        debounce={DEBOUNCE_RATE}
      />
    </div>
    <div className="uk-card-footer">
      <div className="uk-flex uk-flex-between uk-flex-middle">
        <div>
          <p className="uk-margin-small-bottom">
            <a href={readMoreLink} className="uk-button uk-button-text">
              read more
            </a>
          </p>
        </div>
        <div className="uk-text-meta">
          <Icons isHorizontal iconSize={ICON_SIZE} countRight={views} />
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  tag: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  readMoreLink: PropTypes.string.isRequired,
  imageNo: PropTypes.object.isRequired
};

export default Card;
