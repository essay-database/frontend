import React, { PureComponent, Fragment, createRef } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import Essay from "./Essay";
import Card from "./Card";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import {
  FETCH_URL,
  LOADING_DELAY,
  NUM_FEATURED,
  FACEBOOK_SHARE_LINK,
  TWITTER_SHARE_LINK
} from "./constants";
import { shuffleSelect } from "./utils";
import { Loading, PageNotFound } from "./staticPages/";
import "./styles/essay_container.css";

const SIDEBAR_OFFSET = 130;
class EssayContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      essay: null,
      featuredEssays: [],
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
    let { essay, featuredEssays } = this.state;
    try {
      ({ data: essay } = await axios.get(
        `${FETCH_URL}/${this.props.match.params.id}`
      ));
      ({ data: featuredEssays } = await axios.get(FETCH_URL + "/featured"));
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      this.setState({
        essay,
        featuredEssays: shuffleSelect(featuredEssays, NUM_FEATURED),
        isLoading: false
      });
    }, LOADING_DELAY);
    window.onpopstate = this.handlePopState;
    window.onscroll = this.handleScroll;
    this.loadComments();
  }

  componentWillUnmount() {
    window.onscroll = null;
    window.onpopstate = null;
  }

  render() {
    const { essay, featuredEssays, invisisble, isLoading } = this.state;
    if (isLoading) return <Loading />;
    return essay ? (
      <Fragment>
        <div className="uk-grid" uk-grid="">
          <div className="uk-visible@m uk-width-1-6@m uk-flex uk-flex-center">
            <div
              id="social_side"
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
              imageLink={essay.imageLink}
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
                facebookShareLink={essay.facebookShareLink}
                twitterShareLink={essay.twitterShareLink}
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
                    linkEssay={`/essays/${id}`}
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
            <div
              className="fb-comments"
              data-href="www.essaydatabase.org"
              data-numposts="5"
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
