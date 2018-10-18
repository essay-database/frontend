import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ESSAYS_SHAPE } from './constants';
import Card from './Card';

const CARD_WIDTH = 400;
const CARD_HEIGHT = (CARD_WIDTH * 2) / 3;

const ToTop = () => (
  <div className="uk-text-right">
    <button uk-totop="" uk-scroll="" />
  </div>
);

const FilterAndSort = () => (
  <Fragment>
    <div className="uk-flex uk-flex-between uk-flex-wrap">
      <div>
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
          <li uk-filter-control="[data-tag='featured']">
            <a>Featured</a>
          </li>
        </ul>
      </div>
      <div>
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
  </Fragment>
);

const Grid = ({ essays }) => (
  <div uk-filter="target: .js-filter">
    <FilterAndSort />
    <div
      className="js-filter uk-margin-bottom uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@xl"
      uk-grid=""
    >
      {essays.map(({ id, paragraphs, tag, dateUploaded, imageLink }) => (
        <div key={id} data-tag={tag} data-date={dateUploaded.valueOf()}>
          <Card
            width={CARD_WIDTH}
            heigh={CARD_HEIGHT}
            text={paragraphs[0]}
            tag={tag}
            linkImage={imageLink}
            linkEssay={`/essays/${id}`}
          />
        </div>
      ))}
    </div>
    <ToTop />
  </div>
);

Grid.propTypes = {
  essays: PropTypes.arrayOf(ESSAYS_SHAPE).isRequired
};

export default Grid;
