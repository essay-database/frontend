import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { PAGE_URL } from "../../src/constants";

class Page extends PureComponent {
  state = {
    content: ""
  };

  async componentDidMount() {
    const { page } = this.props;
    let content;
    try {
      ({ data: content } = await axios.get(`${PAGE_URL}/${page}`));
    } catch (error) {
      console.error(`could not fetch page ${page}: ${error}`);
    }
    this.setState({
      content
    });
  }

  render() {
    const { content } = this.state;
    const { page } = this.props;

    return (
      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <h2 className="uk-text-capitalize">{page}</h2>
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
