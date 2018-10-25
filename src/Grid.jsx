import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ESSAYS_SHAPE } from './constants';
import Card from './Card';

class ToTop extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    };
  }

  componentDidMount() {
    window.onscroll = () => {
      this.setState({
        display: 'block'
      });
    };
  }

  render() {
    const { display } = this.state;
    return (
      <div className="uk-text-right" style={{ display }}>
        <button uk-totop="" uk-scroll="" />
      </div>
    );
  }
}

const FilterAndSort = () => (
  <Fragment>
    <div className="uk-flex uk-flex-between uk-flex-wrap uk-padding-small">
      <div>
        <ul className="uk-subnav uk-subnav-pill">
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
        <ul className="uk-subnav uk-subnav-pill">
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
  <div>
    {essays.length > 0 ? (
      <div uk-filter="target: .js-filter">
        <FilterAndSort />
        <div
          className="js-filter uk-margin-bottom uk-grid uk-grid-small uk-grid-match uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@xl"
          uk-grid=""
          uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500;"
        >
          {essays.map(({ id, paragraphs, tag, dateUploaded, imageLink }) => (
            <div key={id} data-tag={tag} data-date={dateUploaded.valueOf()}>
              <Card
                text={paragraphs[0]}
                tag={tag}
                imageLink={imageLink}
                linkEssay={`/essays/${id}`}
              />
            </div>
          ))}
        </div>
        <div className="uk-padding-small uk-margin-small-bottom">
          <ToTop />
        </div>
      </div>
    ) : (
      <div
        className="uk-flex uk-flex-center uk-flex-middle"
        uk-height-viewport="expand: true"
      >
        <p>nothing to show</p>
      </div>
    )}
  </div>
);

Grid.propTypes = {
  essays: PropTypes.arrayOf(ESSAYS_SHAPE).isRequired
};

export default Grid;
