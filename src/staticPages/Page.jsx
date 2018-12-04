import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { PAGE_URL } from "../../src/constants";

class Page extends PureComponent {
  state = {
    text: ""
  };

  async componentDidMount() {
    const page = this.props.page;
    let text;
    try {
      ({ data: text } = await axios.get(`${PAGE_URL}/${page}`));
    } catch (error) {
      console.error(`could not fetch page ${page}: ${error}`);
    }
    this.setState({
      text
    });
  }

  render() {
    const { text } = this.state;
    const { page } = this.props;
    console.log(this.state, this.props);
    return (
      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <h3>{page}</h3>
          {text}
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.string.isRequired
};

export default Page;
