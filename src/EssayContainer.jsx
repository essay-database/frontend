import React, { PureComponent, Fragment, createRef } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import Essay from "./Essay";
import Card from "./Card";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import {
  API_URL,
  NUM_FEATURED,
  FACEBOOK_SHARE_LINK,
  TWITTER_SHARE_LINK
} from "./constants";
import { shuffleSelect } from "./utils";
import { Loading, PageNotFound } from "./staticPages/";
import "./styles/essayContainer.css";

const SIDEBAR_OFFSET = 130;

class EssayContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      essay: null,
      featuredEssays: [],
      newEssays: [],
      popularEssays: [],
      invisisble: false,
      isLoading: true
    };
    this.socialLimit = createRef();
    this.socialBar = createRef();
  }

  handleScroll = () => {
    const offsetTop = this.socialLimit.current.offsetTop;
    const heightBottom = this.socialBar.current.getBoundingClientRect().bottom;
    if (window.scrollY + heightBottom > offsetTop) {
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

  handlePopState = e => {
    e.preventDefault();
    if (this.props.history.action === "POP") this.props.history.goBack();
    else if (this.props.history.action === "PUSH")
      this.props.history.goForward();
  };

  loadComments() {
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=1298099583680280&autoLogAppEvents=1";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  async componentDidMount() {
    let { essay, featuredEssays, newEssays, popularEssays } = this.state;
    try {
      ({ data: essay } = await axios.get(
        `${API_URL}/${this.props.match.params.id}`
      ));
      ({ data: featuredEssays } = await axios.get(`${API_URL}?tag=featured`));
      ({ data: newEssays } = await axios.get(`${API_URL}?tag=new`));
      ({ data: popularEssays } = await axios.get(`${API_URL}?tag=popular`));
    } catch (error) {
      console.error(error);
    }
    this.setState({
      essay,
      featuredEssays: shuffleSelect(featuredEssays, NUM_FEATURED),
      newEssays: shuffleSelect(newEssays, NUM_FEATURED),
      popularEssays: shuffleSelect(popularEssays, NUM_FEATURED),
      isLoading: false
    });
    window.onpopstate = this.handlePopState;
    window.onscroll = this.handleScroll;
    this.loadComments();
  }

  componentWillUnmount() {
    window.onscroll = null;
    window.onpopstate = null;
  }

  render() {
    const {
      essay,
      featuredEssays,
      newEssays,
      popularEssays,
      invisisble,
      isLoading
    } = this.state;
    if (isLoading) return <Loading />;
    return essay ? (
      <Fragment>
        <div className="uk-grid" uk-grid="">
          <div className="uk-visible@m uk-width-1-6@m uk-flex uk-flex-center">
            <div
              id="socialSide"
              uk-sticky={`offset: ${SIDEBAR_OFFSET};`}
              className={invisisble ? "uk-invisible" : ""}
              ref={this.socialBar}
            >
              <Sidebar
                facebookShareLink={FACEBOOK_SHARE_LINK}
                twitterShareLink={TWITTER_SHARE_LINK}
              />
            </div>
          </div>
          <div className="uk-width-2-3@m">
            <Essay
              paragraphs={essay.paragraphs}
              prompt={essay.prompt}
              largeImageURL={essay.largeImageURL}
              author={essay.author}
              college={essay.college}
              country={essay.country}
              dateUploaded={essay.dateUploaded}
              applicationStatus={essay.applicationStatus}
              yearApplied={essay.yearApplied}
            />
            <div ref={this.socialLimit} />
            <div className="uk-hidden@m uk-flex uk-flex-right uk-padding">
              <Sidebar
                horizontal
                facebookShareLink={FACEBOOK_SHARE_LINK}
                twitterShareLink={TWITTER_SHARE_LINK}
              />
            </div>
          </div>
        </div>

        {featuredEssays.length > 0 && (
          <div className="uk-section uk-section-xsmall">
            <div className="uk-container">
              <h3 className="uk-text-uppercase uk-text-small uk-text-bold uk-heading-divider">
                featured
              </h3>
              <div
                className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-2@s uk-child-width-1-3@l"
                uk-grid=""
              >
                {featuredEssays.map(({ id, paragraphs, smallImageURL }) => (
                  <div key={id}>
                    <Card
                      text={paragraphs.slice(0, 3).join(" ")}
                      essayURL={`/essays/${id}`}
                      smallImageURL={smallImageURL}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {newEssays.length > 0 && (
          <div className="uk-section uk-section-xsmall">
            <div className="uk-container">
              <h3 className="uk-text-uppercase uk-text-small uk-text-bold uk-heading-divider">
                new
              </h3>
              <div
                className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-2@s uk-child-width-1-3@l"
                uk-grid=""
              >
                {newEssays.map(({ id, paragraphs, smallImageURL }) => (
                  <div key={id}>
                    <Card
                      text={paragraphs.slice(0, 3).join(" ")}
                      essayURL={`/essays/${id}`}
                      smallImageURL={smallImageURL}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {popularEssays.length > 0 && (
          <div className="uk-section uk-section-xsmall">
            <div className="uk-container">
              <h3 className="uk-text-uppercase uk-text-small uk-text-bold uk-heading-divider">
                popular
              </h3>
              <div
                className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-2@s uk-child-width-1-3@l"
                uk-grid=""
              >
                {popularEssays.map(({ id, paragraphs, smallImageURL }) => (
                  <div key={id}>
                    <Card
                      text={paragraphs.slice(0, 3).join(" ")}
                      essayURL={`/essays/${id}`}
                      smallImageURL={smallImageURL}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="uk-section uk-section-muted">
          <div className="uk-container">
            <h3 className="uk-text-uppercase uk-text-small uk-heading-divider">
              <span className="uk-text-bold">comments</span>
              <span> (does not post on facebook)</span>
            </h3>
            <div
              className="fb-comments"
              data-numposts="5"
              data-width="700"
              data-href="essaydatabase.org"
            />
          </div>
        </div>
        <Footer />
      </Fragment>
    ) : (
      <PageNotFound />
    );
  }
}

export default withRouter(EssayContainer);
