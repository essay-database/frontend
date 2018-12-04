import React from "react";
import PropTypes from "prop-types";
import Details from "./Details";
import "./styles/essay.css";

const Essay = ({
  paragraphs,
  prompt,
  author,
  college,
  country,
  dateUploaded,
  applicationStatus,
  yearApplied,
  largeImageURL
}) => {
  return (
    <article className="uk-article">
      <h2
        className={`${
          prompt ? "uk-margin-small-bottom" : "uk-margin-remove-bottom"
        } uk-heading-primary`}
      >
        {prompt}
      </h2>
      <div className="uk-overflow-hidden">
        <img
          data-src={largeImageURL}
          alt=""
          uk-img=""
          uk-scrollspy="cls: uk-animation-kenburns; repeat: true"
          className="uk-animation-reverse uk-transform-origin-top-right"
        />
      </div>
      <div className="uk-padding">
        <Details
          author={author}
          college={college}
          country={country}
          dateUploaded={dateUploaded}
          applicationStatus={applicationStatus}
          yearApplied={yearApplied}
        />
        <div>
          {paragraphs.map((paragraph, idx) => (
            <p
              key={idx}
              className={idx === 0 ? "uk-dropcap uk-text-lead" : "textSize"}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

Essay.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  prompt: PropTypes.string,
  author: PropTypes.string,
  largeImageURL: PropTypes.string.isRequired,
  college: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  dateUploaded: PropTypes.string.isRequired,
  applicationStatus: PropTypes.string.isRequired,
  yearApplied: PropTypes.number.isRequired
};
export default Essay;
