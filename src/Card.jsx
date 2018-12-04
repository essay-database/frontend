import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import { statusClass } from "./utils";
import "./styles/card.css";

const WIDTH = 300;
const HEIGHT = 200;

const Card = ({
  tag,
  text,
  essayURL,
  smallImageURL,
  applicationStatus,
  college,
  prompt
}) => (
  <div className="uk-card uk-card-small" uk-grid="">
    <div className="uk-card-media-right uk-flex-last@m uk-visible@m">
      <a href={essayURL} className="uk-link-reset">
        <div className="uk-inline uk-cover-container">
          <img data-src={smallImageURL} uk-cover="" alt="" uk-img="" />
          {tag && (
            <div className="uk-overlay uk-position-top-right">
              <p className="tag uk-text-small uk-text-capitalize">{tag}</p>
            </div>
          )}
          <canvas width={WIDTH} height={HEIGHT} />
        </div>
      </a>
    </div>
    <div className="uk-width-expand">
      <div className="uk-card-body uk-padding-remove">
        <h3 className="uk-card-title">{prompt}</h3>
        <div className="uk-flex uk-flex-between uk-flex-middle uk-text-small">
          <div>
            <p className="uk-margin-remove uk-text-primary uk-text-emphasis">
              {college}
            </p>
          </div>
          <div>
            <p
              className={`uk-margin-remove uk-text-capitalize uk-label ${statusClass(
                applicationStatus
              )}`}
            >
              {applicationStatus}
            </p>
          </div>
        </div>
        <p>
          <a href={essayURL} className="uk-link-reset textSize">
            <LinesEllipsis
              text={text}
              maxLine={2}
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

Card.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string.isRequired,
  essayURL: PropTypes.string.isRequired,
  smallImageURL: PropTypes.string.isRequired,
  prompt: PropTypes.string,
  college: PropTypes.string,
  applicationStatus: PropTypes.string
};

export default Card;
