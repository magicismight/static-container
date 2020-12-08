import { Component, Fragment, createElement } from "react";

export default class extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.shouldUpdate;
  }

  render() {
    return createElement(Fragment, null, this.props.children);
  }
}
