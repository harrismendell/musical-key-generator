import React from "react";

export default class Note extends React.Component {
  render() {
    const { name, active } = this.props;
    const noteContainerStyle = {
      marginRight: "15px"
    }
    const noteStyle = {
      color: active ? "Blue" : "Grey",
      verticalAlign: "center"
    }
    return(
      <div style={noteContainerStyle}>
        <h1 style={noteStyle}>{name}</h1>
      </div>
    );
  }
}