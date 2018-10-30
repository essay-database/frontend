import React, { PureComponent, Fragment, createRef } from "react";
import PropTypes from "prop-types";
import Essay from "./Essay";
import Featured from "./Featured";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Comments from "./Comments";
import { ESSAYS_SHAPE } from "./constants";

const FEATURED_HEADING = "featured";
const POPULAR_HEADING = "popular";
const LATEST_HEADING = "latest";
const SIDEBAR_OFFSET = 130;

class EssayContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      invisisble: false
    };
    this.socialLimit = createRef();
  }

  componentDidMount() {
    window.onscroll = () => {
      const offsetTop = this.socialLimit.current.offsetTop;
      console.log(this.socialLimit.current.offsetHeight);
      if (window.scrollY + SIDEBAR_OFFSET > offsetTop) {
        this.setState({
          invisisble: true
        });
      } else {
        if (this.state.invisisble) {
          this.setState({
            invisisble: false
          });
        }
      }
    };
  }

  render() {
    const {
      essay: {
        prompt,
        college,
        country,
        dateUploaded,
        yearApplied,
        applicationStatus,
        imageLink,
        paragraphs,
        author,
        facebookShareLink,
        twitterShareLink
      },
      popularEssays,
      latestEssays,
      featuredEssays
    } = this.props;

    const featuredCollection = [
      { essays: featuredEssays, heading: FEATURED_HEADING },
      {
        essays: popularEssays,
        heading: POPULAR_HEADING
      },
      {
        essays: latestEssays,
        heading: LATEST_HEADING
      }
    ];
    return (
      <Fragment>
        <div className="uk-grid" uk-grid="">
          <div className="uk-visible@m uk-width-1-6@m uk-flex uk-flex-center">
            <div
              uk-sticky={`offset: ${SIDEBAR_OFFSET};`}
              className={this.state.invisisble ? "uk-invisible" : ""}
            >
              <Sidebar
                facebookShareLink={facebookShareLink}
                twitterShareLink={twitterShareLink}
              />
            </div>
          </div>
          <div className="uk-width-2-3@m">
            <Essay
              paragraphs={paragraphs}
              prompt={prompt}
              imageLink={imageLink}
              author={author}
              college={college}
              country={country}
              dateUploaded={dateUploaded}
              applicationStatus={applicationStatus}
              yearApplied={yearApplied}
            />
            <div ref={this.socialLimit} />
            <div className="uk-hidden@m uk-flex uk-flex-right uk-padding">
              <Sidebar
                horizontal
                facebookShareLink={facebookShareLink}
                twitterShareLink={twitterShareLink}
              />
            </div>
            {featuredCollection.map(({ essays, heading }, idx) => (
              <Featured key={idx} essays={essays} heading={heading} />
            ))}
          </div>
          {/* <div className="uk-visible@m uk-width-1-6@m" /> */}
        </div>
        <div className="uk-section uk-section-muted">
          <div className="uk-container uk-width-2-3@m uk-flex-center">
            <h3 className="uk-text-uppercase uk-text-small uk-text-bold uk-heading-divider">
              comments
            </h3>
            <Comments />
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

EssayContainer.propTypes = {
  essay: ESSAYS_SHAPE,
  featuredEssays: PropTypes.arrayOf(ESSAYS_SHAPE).isRequired,
  latestEssays: PropTypes.PropTypes.arrayOf(ESSAYS_SHAPE).isRequired,
  popularEssays: PropTypes.PropTypes.arrayOf(ESSAYS_SHAPE).isRequired
};

export default EssayContainer;
