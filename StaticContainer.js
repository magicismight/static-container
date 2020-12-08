import React, { Component } from "react";
import PropTypes from "prop-types";

export default class extends Component {
  static propTypes = {
    shouldUpdate: PropTypes.bool.isRequired,
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.shouldUpdate;
  }

  render() {
    return <>{this.props.children}</>;
  }
}
