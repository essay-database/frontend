import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { PAGE_URL } from "../../src/constants";

class Page extends PureComponent {
  state = {
    content: ""
  };

  async componentDidMount() {
    const { text } = this.props;
    let content;
    try {
      ({ data: content } = await axios.get(`${PAGE_URL}/${text}`));
    } catch (error) {
      console.error(`could not fetch page ${text}: ${error}`);
    }
    this.setState({
      content
    });
  }

  render() {
    const { content } = this.state;
    const { text } = this.props;

    return (
      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <h2 className="uk-text-capitalize">{text}</h2>
          <div>
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  text: PropTypes.string.isRequired
};

export default Page;
