import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import { NUM_LINES } from "./constants";
import "./styles/card.css";

const WIDTH = 640;
const RATIO = 1 / 3;
const HEIGHT = WIDTH * RATIO;
const LABEL_LIMIT = 25;
const ELLIPSIS = "..";

const truncate = label =>
  label.length > LABEL_LIMIT
    ? label.substring(0, LABEL_LIMIT) + ELLIPSIS
    : label;

const selectStatusLabel = status => {
  let classname = "uk-label-";
  switch (status) {
    case "accepted":
      classname += "success";
      break;
    case "rejected":
      classname += "danger";
      break;
    case "waitlisted":
      classname += "warning";
      break;
    case "pending":
      classname += "default";
      break;
    default:
      classname += "default";
      break;
  }
  return classname;
};

const Card = ({
  tag,
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
          {tag && (
            <div className="uk-overlay uk-light uk-position-top-right">
              <p className="tag uk-text-small uk-text-capitalize">{tag}</p>
            </div>
          )}
          <canvas width={WIDTH} height={HEIGHT} />
        </div>
      </a>
    </div>
    <div className="uk-card-body">
      <p className="uk-dropcap">
        <a href={essayURL} className="uk-link-reset textSize">
          <LinesEllipsis
            text={text}
            maxLine={NUM_LINES}
            ellipsis="..."
            trimRight
            basedOn="words"
            component="p"
          />
        </a>
      </p>
    </div>
    {(applicationStatus || college) && (
      <div className="uk-card-footer">
        <div
          className="uk-flex uk-flex-between uk-flex-middle uk-text-small"
          uk-margin=""
        >
          {applicationStatus && (
            <div className="uk-margin-small-right">
              <p
                className={`uk-margin-remove uk-text-capitalize uk-label ${selectStatusLabel(
                  applicationStatus
                )}`}
              >
                {applicationStatus}
              </p>
            </div>
          )}
          {college && (
            <div>
              <p className="uk-margin-remove uk-badge">{truncate(college)}</p>
            </div>
          )}
        </div>
      </div>
    )}
  </div>
);

Card.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string.isRequired,
  essayURL: PropTypes.string.isRequired,
  smallImageURL: PropTypes.string.isRequired,
  college: PropTypes.string,
  applicationStatus: PropTypes.string
};

export default Card;
