import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ESSAYS_SHAPE } from './constants';
import Card from './Card';
import Filter from './Filter';

const ToTop = () => (
  <div className="uk-text-right">
    <button uk-totop="" uk-scroll="" />
  </div>
);

const FilterAndSort = () => (
  <Fragment>
    <div className="uk-flex uk-flex-between uk-flex-wrap">
      <div className="uk-flex uk-flex-middle">
        <div className="uk-margin-small-right uk-text-meta uk-visible@s uk-text-uppercase">
          Filter:{' '}
        </div>
        <ul className="uk-subnav uk-subnav-pill uk-margin-small">
          <li className="uk-active" uk-filter-control="">
            <a>All</a>
          </li>
          <li uk-filter-control="[data-tag='new']">
            <a>New</a>
          </li>
          <li uk-filter-control="[data-tag='popular']">
            <a>Popular</a>
          </li>
          <li uk-filter-control="[data-tag='editors\' pick']">
            <a>Editors' Pick</a>
          </li>
          <li>
            <a uk-toggle="target: #modal-filter">Advanced</a>
            <Filter />
          </li>
          <li>
            <a
              href="#filter"
              uk-toggle="target: #filter; animation: uk-animation-slide-top-small; duration: 500; queued: true"
            >
              Filter
            </a>
          </li>
        </ul>
      </div>
      <div className="uk-flex uk-flex-middle">
        <div className="uk-margin-small-right uk-text-meta uk-visible@s uk-text-uppercase">
          Sort:{' '}
        </div>
        <ul className="uk-subnav uk-subnav-pill uk-margin-small">
          <li
            className="uk-active"
            uk-filter-control="sort: data-date; order: desc"
          >
            <a>Most recent</a>
          </li>
          <li uk-filter-control="sort: data-date">
            <a>Least recent</a>
          </li>
        </ul>
      </div>
    </div>
    <hr className="uk-margin-remove-top" />
    <div
      id="filter"
      className="uk-card uk-card-default uk-card-body uk-margin-remove"
      hidden
    >
      filter options
    </div>
  </Fragment>
);

const Grid = ({ essays }) => (
  <div>
    <div uk-filter="target: .js-filter">
      <FilterAndSort />
      <div
        className="js-filter uk-margin-bottom uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@xl"
        uk-grid=""
      >
        {essays.map(
          ({ id, paragraphs, meta: { views, tag, dateUploaded, imageNo } }) => (
            <div
              key={id}
              data-tag={tag}
              data-date={dateUploaded.format('YYYY MM DD')}
            >
              <Card
                imageNo={imageNo}
                tag={tag}
                text={paragraphs.join(' ')}
                readMoreLink={`/essays/${id}`}
                views={views}
                linkEssay={`/essays/${essay.id}`}
              />
            </div>
          )
        )}
      </div>
    </div>
    <ToTop />
  </div>
);

Grid.propTypes = {
  essays: PropTypes.arrayOf(ESSAYS_SHAPE).isRequired
};

export default Grid;
