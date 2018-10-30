import React, { PureComponent } from "react";
export default class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="uk-text-center">
          <h1>Something went wrong.</h1>
        </div>
      );
    }
    return this.props.children;
  }
}
