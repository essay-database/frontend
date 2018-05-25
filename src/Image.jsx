import React from "react";

export default class Image extends React.PureComponent {
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
        console.error("error fetching image");
      });
  }

  render() {
    const {
      width = 800,
      height = 400,
      essayLink = "#",
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
