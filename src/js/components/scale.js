import React from "react";
import Note from "./note.js";

export default class Scale extends React.Component {
  render() {
    const {name, id, scale} = this.props.musicalKey;
    const scales = {
      major: [0, 2, 2, 1, 2, 2, 2, 1],
      minor: [0, 2, 1, 2, 2, 1, 2, 2]
    };
    const notes = [
      { name: "C", active: false },
      { name: "C#", active: false },
      { name: "D", active: false },
      { name: "D#", active: false },
      { name: "E", active: false },
      { name: "F", active: false },
      { name: "F#", active: false },
      { name: "G", active: false },
      { name: "G#", active: false },
      { name: "A", active: false },
      { name: "A#", active: false },
      { name: "B", active: false },
    ];

    var startIndex = id;
    for (var step of scales[scale]){
      startIndex += step;
      notes[startIndex % notes.length].active = true
    }

    return (
      <div>
        {notes.map(({name, active}, i) => <Note key={i} name={name} active={active}/>)}
      </div>
    );
  }
}