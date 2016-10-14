import React from "react";

export default class Menu extends React.Component {
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
    ].map((name, i) => <option key={i} value={{name, i}}>{name}</option>)

    const scaleOptions = [
      {name: "Major", value: "major"},
      {name: "Minor", value: "minor"}
    ].map(({name, value}, i) => <option key={i} value={value}>{name}</option>)

    return (
      <form>
        <select class="key">
          {keyOptions}
        </select>
        <select class="major-minor">
          {scaleOptions}
        </select>
      </form>
    );
  }
}