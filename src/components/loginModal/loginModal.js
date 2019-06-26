import React from "react";

export default class Modal extends React.Component {
  render() {
    if (!this.props.isShowing) {
      return null;
    }

    return <div>{this.props.children}</div>;
  }
}
