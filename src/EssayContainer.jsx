import React, { PureComponent, Fragment, createRef } from "react";
import axios from "axios";
import Essay from "./Essay";
import Card from "./Card";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Comments from "./Comments";
import { ESSAYS_INDEX, LOADING_DELAY, NUM_FEATURED } from "./constants";
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
    this.props.history.goBack();
  };

  async componentDidMount() {
    window.onpopstate = this.handlePopState;
    let { essay, featuredEssays } = this.state;
    try {
      ({ data: essay } = await axios.get(
        `${ESSAYS_INDEX}/${this.props.match.params.id}`
      ));
      ({ data: featuredEssays } = await axios.get(ESSAYS_INDEX + "/featured"));
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
    window.onscroll = this.handleScroll;
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
                facebookShareLink={essay.facebookShareLink}
                twitterShareLink={essay.twitterShareLink}
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
                    linkEssay={`${ESSAYS_INDEX}/${id}`}
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
    ) : (
      <PageNotFound />
    );
  }
}

export default EssayContainer;
