import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <h1>Key Gen</h1>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}