import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Image extends PureComponent {
  state = {
    linkImage: ''
  };

  componentDidMount() {
    this.setState(async () => {
      linkImage: await this.imagePromise();
    });
  }

  render() {
    return <img src={this.state.linkImage} alt="" />;
  }
}

Image.propTypes = {
  imagePromise: PropTypes.func.isRequired
};

export default Image;
