import React from "react";
import moment from "moment";

import { dateFormat } from "./constants";
import "./styles/details.css";

export default ({
  name = "author",
  country = "country",
  dateUploaded = moment(),
  applicationStatus = "deferred",
  yearApplied = 1970,
  college = "college",
  linkBasedOnAuthor = "",
  linkBasedOnYearApplied = "",
  linkBasedOnCountry = "",
  linkBasedOnApplicationStatus = "",
  linkBasedOnCollege = ""
}) => (
  <div className="uk-article-meta">
    <div className="uk-flex uk-flex-between">
      <div>
        <p className="uk-margin-remove-bottom uk-text-capitalize">
          <a href={linkBasedOnAuthor} className="uk-link-text link link">
            {name}
          </a>
          {name && country && " | "}
          <a href={linkBasedOnCountry} className="uk-link-text link">
            {country}
          </a>
        </p>
      </div>
      <div>
        <p className="uk-margin-remove-bottom">
          {dateUploaded.format(dateFormat)}
        </p>
      </div>
    </div>

    <div className="uk-flex uk-flex-between">
      <div>
        <p className="uk-text-capitalize">
          <a href={linkBasedOnCollege} className="uk-link-text link">
            {college}
          </a>
          {college && yearApplied && " | "}
          <a href={linkBasedOnYearApplied} className="uk-link-text link">
            {yearApplied}
          </a>
        </p>
      </div>
      <div>
        <p className="uk-text-capitalize">
          <a href={linkBasedOnApplicationStatus} className="uk-link-text link">
            {applicationStatus}
          </a>
        </p>
      </div>
    </div>
  </div>
);
