import React from "react";

export default class Menu extends React.Component {
  handleKeyChange(e){
    var keyId = e.target.value;
    this.props.changeKey(parseInt(keyId))
  }

  handleScaleChange(e){
    var scale = e.target.value;
    this.props.changeScale(scale);
  }

  render() {
    const keyOptions = [
      "C",
      //"C#",
      "D",
      //"D#",
      "E",
      "F",
      //"F#",
      "G",
      //"G#",
      "A",
      //"A#",
      "B"
    ].map((name, keyId) => <option key={keyId} value={keyId}>{name}</option>)

    const scaleOptions = [
      {name: "Major", value: "major"},
      {name: "Minor", value: "minor"}
    ].map(({name, value}, i) => <option key={i} value={value}>{name}</option>)

    const keyStyle = {
      marginRight: "5px"
    }

    return (
      <form class="form-inline">
        <div class="form-group">
          <select class="key form-control" style={keyStyle} onChange={this.handleKeyChange.bind(this)}>
            {keyOptions}
          </select>
        </div>
        <div class="form-group">
          <select class="major-minor form-control" onChange={this.handleScaleChange.bind(this)}>
            {scaleOptions}
          </select>
        </div>
      </form>
    );
  }
}