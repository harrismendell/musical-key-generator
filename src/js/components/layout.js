import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <div class="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}