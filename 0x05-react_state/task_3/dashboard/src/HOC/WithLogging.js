import React, { Component } from 'react';

const WithLogging = ({ WrappedComponent }) => {
  WithLogging.displayName = `WithLogging(${
    WrappedComponent.name || 'Component'
  })`;

  return class extends Component {
    componentDidMount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
    }

    componentWillUnmount() {
      console.log(
        `Component ${getDisplayName(WrappedComponent)} is going to unmount`
      );
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithLogging;
