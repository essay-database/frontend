import React, { Fragment, createRef, PureComponent, forwardRef } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import { API_URL } from "./constants";
import Card from "./Card";
import { Empty, Loading } from "./staticPages";

const ToTop = forwardRef((props, ref) => (
  <div
    className={`uk-section uk-section-secondary uk-section-xsmall uk-padding-remove-horizontal ${
      props.classes
    }`}
    ref={ref}
    id="to-top"
  >
    <div className="uk-container uk-container-expand">
      <div className="uk-flex uk-flex-right">
        <button uk-totop="" uk-scroll="" />
      </div>
    </div>
  </div>
));

const FilterSort = ({ handleFilter }) => (
  <Fragment>
    <div className="uk-flex uk-flex-between uk-flex-wrap uk-margin-top">
      <div>
        <ul onClick={handleFilter} className="uk-subnav uk-subnav-pill">
          <li className="uk-active" uk-filter-control="">
            <a href="#all">All</a>
          </li>
          <li uk-filter-control="[data-tag='new']">
            <a href="#new">New</a>
          </li>
          <li uk-filter-control="[data-tag='popular']">
            <a href="#popular">Popular</a>
          </li>
          <li uk-filter-control="[data-tag='featured']">
            <a href="#featured">Featured</a>
          </li>
        </ul>
      </div>
    </div>
  </Fragment>
);

class Grid extends PureComponent {
  constructor(props) {
    super(props);
    this.toTop = createRef();
    this.state = {
      isVisible: false,
      essays: [],
      isLoading: true
    };
  }

  handleFilter = () => {
    if (this.state.essays.length > 0) {
      const offsetTop = this.toTop.current.offsetTop;
      if (offsetTop > window.innerHeight) {
        this.setState({
          isVisible: true
        });
      } else {
        if (this.state.isVisible) {
          this.setState({
            isVisible: false
          });
        }
      }
    }
  };

  handlePopState = e => {
    e.preventDefault();
    if (this.props.history.action === "POP") this.props.history.goBack();
    else if (this.props.history.action === "PUSH")
      this.props.history.goForward();
  };

  componentDidMount = async () => {
    let { essays } = this.state;
    try {
      ({ data: essays } = await axios.get(API_URL));
    } catch (error) {
      console.error(error);
    }
    this.setState(
      {
        essays,
        isLoading: false
      },
      this.handleFilter
    );
    window.onpopstate = this.handlePopState;
  };

  componentWillUnmount() {
    window.onpopstate = null;
  }

  render() {
    const { essays, isLoading } = this.state;
    if (isLoading) return <Loading />;
    return (
      <div>
        {essays.length > 0 ? (
          <div
            uk-filter="target: .js-filter"
            className="uk-flex uk-flex-column uk-flex-between uk-flex-center"
          >
            <FilterSort handleFilter={this.handleFilter} />
            <div
              className="js-filter uk-grid uk-grid-small uk-child-width-1-1 uk-section-default"
              uk-grid="masonry: false"
              uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 200;"
              ref={this.grid}
            >
              {essays.map(
                ({
                  id,
                  paragraphs,
                  tag,
                  dateUploaded,
                  smallImageURL,
                  prompt,
                  college,
                  applicationStatus
                }) => (
                  <div
                    key={id}
                    data-tag={tag}
                    data-date={dateUploaded.valueOf()}
                  >
                    <Card
                      text={paragraphs.slice(0, 3).join(" ")}
                      prompt={prompt}
                      tag={tag}
                      smallImageURL={smallImageURL}
                      essayURL={`/essays/${id}`}
                      college={college}
                      applicationStatus={applicationStatus}
                    />
                    <hr />
                  </div>
                )
              )}
            </div>
            <div>
              <div className="uk-section uk-section-muted uk-section-xsmall" />
              <div className="uk-container" />
              <ToTop
                ref={this.toTop}
                classes={this.state.isVisible ? "" : `uk-invisible`}
              />
            </div>
          </div>
        ) : (
          <Empty />
        )}
      </div>
    );
  }
}

export default withRouter(Grid);
