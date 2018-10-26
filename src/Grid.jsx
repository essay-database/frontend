import React, { PureComponent, Fragment, createRef } from 'react';
import PropTypes from 'prop-types';
import { ESSAYS_SHAPE } from './constants';
import Card from './Card';

const ToTop = ({ numChildren }) =>
  numChildren > 4 && (
    <div className="uk-section uk-section-secondary uk-section-xsmall uk-padding-remove-horizontal">
      <div className="uk-container uk-container-expand">
        <div className="uk-flex uk-flex-right">
          <button uk-totop="" uk-scroll="" />
        </div>
      </div>
    </div>
  );

const FilterAndSort = () => (
  <Fragment>
    <div className="uk-flex uk-flex-between uk-flex-wrap">
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
  </Fragment>
);

class Grid extends PureComponent {
  constructor(props) {
    super(props);
    this.grid = createRef();
    this.state = {
      numChildren: 0
    };
  }

  componentDidMount() {
    const numChildren = this.grid.current.childElementCount;
    this.setState({
      numChildren
    });
  }

  render() {
    const { essays } = this.props;

    return (
      <div>
        {essays.length > 0 ? (
          <div uk-filter="target: .js-filter">
            <FilterAndSort />
            <div
              className="js-filter uk-grid uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@xl uk-section-muted"
              uk-grid=""
              uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500;"
              ref={this.grid}
            >
              {essays.map(
                ({
                  id,
                  paragraphs,
                  tag,
                  dateUploaded,
                  imageLink,
                  college,
                  applicationStatus
                }) => (
                  <div
                    key={id}
                    data-tag={tag}
                    data-date={dateUploaded.valueOf()}
                  >
                    <Card
                      text={paragraphs[0]}
                      tag={tag}
                      imageLink={imageLink}
                      linkEssay={`/essays/${id}`}
                      college={college}
                      applicationStatus={applicationStatus}
                    />
                  </div>
                )
              )}
            </div>
            <div>
              <div className="uk-section uk-section-muted uk-section-xsmall" />
              <div className="uk-container" />
              <ToTop numChildren={this.state.numChildren} />
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
  }
}

Grid.propTypes = {
  essays: PropTypes.arrayOf(ESSAYS_SHAPE).isRequired
};

export default Grid;
