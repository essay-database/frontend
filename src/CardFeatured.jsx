import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import { statusClass } from "./utils";
import "./styles/card.css";

const WIDTH = 640;
const HEIGHT = 300;

const CardFeatured = ({
  text,
  essayURL,
  smallImageURL,
  applicationStatus,
  college
}) => (
  <div className="uk-card uk-card-small uk-card-default uk-box-shadow-hover-large">
    <div className="uk-card-media-top">
      <a href={essayURL} className="uk-link-reset">
        <div className="uk-inline uk-cover-container">
          <img data-src={smallImageURL} uk-cover="" alt="" uk-img="" />
          <canvas width={WIDTH} height={HEIGHT} />
        </div>
      </a>
    </div>
    <div className="uk-card-body">
      <div className="uk-flex uk-flex-between uk-text-small">
        <div>
          <p className="uk-text-primary uk-text-emphasis">{college}</p>
        </div>
        <div>
          <p
            className={`uk-text-capitalize uk-label ${statusClass(
              applicationStatus
            )}`}
          >
            {applicationStatus}
          </p>
        </div>
      </div>

      <div>
        <p className="uk-dropcap">
          <a href={essayURL} className="uk-link-reset textSize">
            <LinesEllipsis
              text={text}
              maxLine={1}
              ellipsis="..."
              trimRight
              basedOn="words"
              component="span"
            />
          </a>
        </p>
      </div>
    </div>
  </div>
);

CardFeatured.propTypes = {
  text: PropTypes.string.isRequired,
  essayURL: PropTypes.string.isRequired,
  smallImageURL: PropTypes.string.isRequired,
  college: PropTypes.string,
  applicationStatus: PropTypes.string
};

export default CardFeatured;
