import React, { PureComponent, createRef } from "react";
import { UPLOAD_IMAGE, UPLOAD_TITLE } from "./constants";

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.state = {
      width: 0,
      height: 0
    };
  }

  getWidth = () =>
    window.innerWidth > 960 ? window.innerWidth / 2 : window.innerWidth;

  handleDimensions = () => {
    this.setState({
      width: this.getWidth(),
      height:
        window.innerHeight -
        this.ref.current.offsetHeight +
        (window.innerWidth > 960 ? 100 : 0)
    });
  };

  componentDidMount = () => {
    this.handleDimensions();
    window.onresize = this.handleDimensions;
  };

  componentWillUnmount() {
    window.onresize = null;
  }

  render() {
    const { width, height } = this.state;
    return (
      <div className="uk-modal-full modal-form" uk-modal="">
        <div className="uk-modal-dialog">
          <button
            className="uk-modal-close-full uk-close-large"
            type="button"
            uk-close=""
          />
          <div className="uk-grid-collapse uk-child-width-1-2@m" uk-grid="">
            <div>
              <h1 className="uk-text-center" ref={this.ref}>
                {UPLOAD_TITLE}
              </h1>
              <iframe
                title="submit your essay"
                width={width}
                height={height}
                src="https://docs.google.com/forms/d/e/1FAIpQLSd2KZfeAHiZ_UcxLtzs-3gwzP0mXPN_4HCTQKZ6aiB5764BOg/viewform?embedded=true"
              >
                Loading...
              </iframe>
            </div>
            <div className="uk-inline uk-flex-first">
              <div
                className="uk-background-cover uk-visible@m"
                data-src={UPLOAD_IMAGE}
                uk-img=""
                uk-height-viewport=""
              />
              <div className="uk-visible@m uk-overlay uk-overlay-default uk-position-cover" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
