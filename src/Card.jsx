import React from 'react';
import PropTypes from 'prop-types';
import ClampLines from 'react-clamp-lines';
import './styles/card.css';

const NUM_LINES = 7;
const DEBOUNCE_RATE = 100;
const WIDTH = 1800;
const HEIGHT = (WIDTH * 2) / 3;

export default ({
  tag = "new",
  paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec ullamcorper. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. In fermentum et sollicitudin ac orci. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Aenean et tortor at risus. Sit amet luctus venenatis lectus magna. Viverra nam libero justo laoreet sit amet cursus. Eu turpis egestas pretium aenean pharetra magna. Ac odio tempor orci dapibus ultrices.",
  linkEssay = "#",
  linkImage = `https://picsum.photos/${WIDTH}/${HEIGHT}/?image=998`,
  width = WIDTH,
  height = HEIGHT
}) => (
  <div className="uk-card uk-card-default">
    <div className="uk-card-media-top">
      <div className="uk-inline uk-cover-container">
        <img data-src={linkImage} alt="" uk-cover="" uk-img="" />
        {tag && (
          <div className="uk-overlay uk-light uk-position-top-right">
            <p className="card uk-text-small uk-text-capitalize">{tag}</p>
          </div>
        )}
        <canvas width={width} height={height} />
      </div>
    </div>
    <div className="uk-card-body uk-padding-small">
    {/* TODO */}
    <ClampLines
        text={paragraph}
        lines={NUM_LINES}
        ellipsis="..."
        buttons={false}
        debounce={DEBOUNCE_RATE}
      />
      <hr/>
      <p>
        <a href={linkEssay} className="uk-link-reset">
          {paragraph}
        </a>
      </p>
    </div>
  </div>
);

Card.propTypes = {
  tag: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  linkEssay: PropTypes.string.isRequired,
  linkImage: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
  height: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
};

export default Card;
