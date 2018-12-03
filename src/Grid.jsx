import React, { createRef, PureComponent, forwardRef } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import { API_URL } from "./constants";
import Card from "./Card";
import { Empty, Loading } from "./staticPages";
import "./styles/grid.css";

const ToTop = forwardRef((props, ref) => (
  <div
    ref={ref}
    className={`uk-section uk-section-secondary uk-section-xsmall uk-padding-remove-horizontal ${
      props.classes
    }`}
    id="to-top"
  >
    <div className="uk-container uk-container-expand">
      <div className="uk-flex uk-flex-right">
        <button uk-totop="" uk-scroll="" />
      </div>
    </div>
  </div>
));

const Filter = ({ handleToggleFilter }) => (
  <div
    class="uk-section uk-section-primary uk-section-xsmall"
    uk-sticky="offset: 110"
  >
    <div class="uk-container uk-container-expand">
      <ul
        onClick={handleToggleFilter}
        className="uk-flex uk-flex-center uk-subnav uk-subnav-pill textWhite"
      >
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
);

const Main = ({ essays }) => (
  <div class="uk-section uk-section-default">
    <div class="uk-container">
      <div
        className="js-filter uk-grid uk-child-width-1-1"
        uk-grid=""
        uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 200;"
      >
        {essays.map(
          ({
            id,
            paragraphs,
            tag,
            smallImageURL,
            college,
            applicationStatus,
            prompt
          }) => (
            <div key={id} data-tag={tag}>
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
    </div>
  </div>
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

  handleToggleFilter = () => {
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
      this.handleToggleFilter
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
          <div uk-filter="target: .js-filter">
            <Filter handleToggleFilter={this.handleToggleFilter} />
            <Main essays={essays} />
            <ToTop
              ref={this.toTop}
              classes={this.state.isVisible ? "" : `uk-invisible`}
            />
          </div>
        ) : (
          <Empty />
        )}
      </div>
    );
  }
}

export default withRouter(Grid);
