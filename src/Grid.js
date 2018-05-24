import React from "react";

import Card from "./Card";
import Filter from "./Filter";

const ToTop = () => (
  <div className="uk-text-right">
    <a href="#" uk-totop="" uk-scroll="" />
  </div>
);

const FilterAndSort = () => (
  <React.Fragment>
    <div className="uk-flex uk-flex-between uk-flex-wrap">
      <div className="uk-flex uk-flex-middle">
        <div className="uk-margin-small-right uk-text-meta uk-visible@s">
          Filter by:
        </div>
        <ul className="uk-subnav uk-subnav-pill uk-margin-small">
          <li className="uk-active" uk-filter-control="">
            <a href="#">All</a>
          </li>
          <li uk-filter-control="[data-tag='new']">
            <a href="#">New</a>
          </li>
          <li uk-filter-control="[data-tag='trending']">
            <a href="#">Trending</a>
          </li>
          <li uk-filter-control="[data-tag='popular']">
            <a href="#">Popular</a>
          </li>

          <li uk-filter-control="[data-tag='editors\' pick']">
            <a href="#">Editors' Pick</a>
          </li>
          <li>
            <a uk-toggle="target: #modal-filter">Advanced</a>
            <Filter />
          </li>
        </ul>
      </div>
      <div className="uk-flex uk-flex-middle">
        <div className="uk-margin-small-right uk-text-meta uk-visible@s">
          Sort by:
        </div>
        <ul className="uk-subnav uk-subnav-pill uk-margin-small">
          <li
            className="uk-active"
            uk-filter-control="sort: data-date; order: desc"
          >
            <a href="#">Most recent</a>
          </li>
          <li uk-filter-control="sort: data-date">
            <a href="#">Least recent</a>
          </li>
        </ul>
      </div>
    </div>
    <hr className="uk-margin-remove-top" />
  </React.Fragment>
);

export default ({ essays = [] }) => (
  <div>
    <div uk-filter="target: .js-filter">
      <FilterAndSort />
      <div
        className="js-filter uk-margin-bottom uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@xl"
        uk-grid=""
        uk-sortable="handle: .uk-card"
      >
        {essays.map(
          ({ id, paragraphs, meta: { views, tag, dateUploaded, imageNo } }) => (
            <div
              key={id}
              data-tag={tag}
              data-date={dateUploaded.format("YYYY MM DD")}
            >
              <Card
                imageNo={imageNo}
                tag={tag}
                text={paragraphs.join(" ")}
                readMoreLink={`/essays/${id}`}
                views={views}
              />
            </div>
          )
        )}
      </div>
    </div>

    <ToTop />
  </div>
);
