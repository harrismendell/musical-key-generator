import React from "react";

export default class Note extends React.Component {
  render() {
    const { name, active } = this.props;
    const noteStyle = {
      color: active ? "Blue" : "Grey",
      verticalAlign: "center"
    }
    return(
      <div>
        <h1 class="note" style={noteStyle}>{name}</h1>
      </div>
    );
  }
}