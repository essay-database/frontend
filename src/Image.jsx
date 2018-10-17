import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Image extends React.PureComponent {
  state = {
    imageNo: null
  };

  componentDidMount() {
    this.props.imageNo
      .then(id => {
        this.setState({
          imageNo: id
        });
      })
      .catch(err => {
        // TODO try again
        console.error('error fetching image', err);
      });
  }

  render() {
    const {
      width = 800,
      height = 400,
      essayLink = '#',
      className
    } = this.props;
    return (
      <a href={essayLink}>
        <img
          className={className}
          src={`https://picsum.photos/${width}/${height}/?image=${
            this.state.imageNo
          }`}
          alt=""
        />
      </a>
    );
  }
}

Image.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  essayLink: PropTypes.string,
  className: PropTypes.string
};

export default Image;
