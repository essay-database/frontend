import React from 'react';
export default class ErrorBoundary extends React.PureComponent {
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
      return <h1 className="uk-text-center">Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
