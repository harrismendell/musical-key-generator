import React from "react";
import Note from "./note.js";

export default class Scale extends React.Component {
  render() {
    const id = this.props.keyId;
    const scale = this.props.scale;
    const scales = {
      major: [0, 2, 2, 1, 2, 2, 2, 1],
      minor: [0, 2, 1, 2, 2, 1, 2, 2]
    };
    const distinctNotes = ["C", "D", "E", "F", "G", "A", "B"]
    const notes = [
      { name: "C", active: false, type: "standard", category: "C"},
      { name: "C#", active: false, type: "sharp", category: "C" },
      { name: "D", active: false, type: "standard", category: "D" },
      { name: "D#", active: false, type: "sharp", category: "D"  },
      { name: "E", active: false, type: "standard", category: "E" },
      { name: "F", active: false, type: "standard", category: "F" },
      { name: "F#", active: false, type: "sharp", category: "F"  },
      { name: "G", active: false, type: "standard", category: "G" },
      { name: "G#", active: false, type: "sharp", category: "G"  },
      { name: "A", active: false, type: "standard", category: "A" },
      { name: "A#", active: false, type: "sharp", category: "A"  },
      { name: "B", active: false, type: "standard", category: "B"},
    ];

    var startIndex = id;
    for (var step of scales[scale]){
      startIndex += step;
      notes[startIndex % notes.length].active = true
    }

    var noteNodes = [];
    for (var note of distinctNotes){
      noteNodes.push(
        <div class="col-md-2">
        {notes.filter(({category}) => category == note).map(({name, active}, i) => <Note key={i} name={name} active={active}/>)}
        </div>
      )
    }

    return (
      <div>
        <div class="row">
          {noteNodes}
        </div>
      </div>
    );
  }
}