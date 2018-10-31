import React, { PureComponent, Fragment, createRef } from "react";
import PropTypes from "prop-types";
import Essay from "./Essay";
import Card from "./Card";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Comments from "./Comments";
import { ESSAYS_SHAPE } from "./constants";
import "./styles/essay_container.css";

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
      featuredEssays
    } = this.props;

    return (
      <Fragment>
        <div className="uk-grid" uk-grid="">
          <div className="uk-visible@m uk-width-1-6@m uk-flex uk-flex-center">
            <div
              id="social_side"
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
          </div>
        </div>

        <div className="uk-section uk-section-small">
          <div className="uk-container">
            <h3 className="uk-text-uppercase uk-text-small uk-text-bold uk-heading-divider">
              featured
            </h3>
            <div
              className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-2@s uk-child-width-1-3@l"
              uk-grid=""
            >
              {featuredEssays.map(({ id, paragraphs, imageLink }) => (
                <div key={id}>
                  <Card
                    text={paragraphs[0]}
                    linkEssay={`/${id}`}
                    imageLink={imageLink}
                  />
                </div>
              ))}
            </div>
          </div>
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
  featuredEssays: PropTypes.arrayOf(ESSAYS_SHAPE).isRequired
};

export default EssayContainer;
