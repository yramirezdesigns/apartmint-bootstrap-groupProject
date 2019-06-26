import React from "react";

export default class Apartments extends React.Component {
  render() {
    if (!this.props.redirect) {
      return null;
    }

    return (
      <div>
        {this.props.children}
        <p>hello my peeps</p>
      </div>
    );
  }
}
