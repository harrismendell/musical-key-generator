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
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B"
    ].map((name, keyId) => <option key={keyId} value={keyId}>{name}</option>)

    const scaleOptions = [
      {name: "Major", value: "major"},
      {name: "Minor", value: "minor"}
    ].map(({name, value}, i) => <option key={i} value={value}>{name}</option>)

    return (
      <form>
        <select class="key" onChange={this.handleKeyChange.bind(this)}>
          {keyOptions}
        </select>
        <select class="major-minor" onChange={this.handleScaleChange.bind(this)}>
          {scaleOptions}
        </select>
      </form>
    );
  }
}