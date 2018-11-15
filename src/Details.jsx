import React from "react";
import PropTypes from "prop-types";

const Details = ({
  author,
  country,
  dateUploaded = new Date(),
  applicationStatus,
  yearApplied,
  college
}) => (
  <div className="uk-article-meta uk-text-capitalize">
    <div className="uk-flex uk-flex-between">
      <div>
        <p>
          <span>{author}</span>
          {author && country && " | "}
          <span>{country}</span>
        </p>
      </div>
      <div>
        <p>{new Date(Date.parse(dateUploaded)).toLocaleDateString("en")}</p>
      </div>
    </div>
    <div className="uk-flex uk-flex-between">
      <div>
        <p>
          <span>{college}</span>
          {college && yearApplied && " | "}
          <span>{yearApplied}</span>
        </p>
      </div>
      <div>
        <p>
          <span>{applicationStatus}</span>
        </p>
      </div>
    </div>
  </div>
);

Details.propTypes = {
  author: PropTypes.string,
  college: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  dateUploaded: PropTypes.string.isRequired,
  applicationStatus: PropTypes.string.isRequired,
  yearApplied: PropTypes.number.isRequired
};

export default Details;
