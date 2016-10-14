import React from "react";
import Note from "./note.js";

export default class Scale extends React.Component {
  render() {
    const id = this.props.keyId;
    const scale = this.props.scale;
    const scales = {
      major: [0, 2, 2, 1, 2, 2, 2],
      minor: [0, 2, 1, 2, 2, 1, 2]
    };
    const notes = [
      [{ name: "C", active: false, type: "standard", category: "C"}, { name: "B#", active: false, type: "sharp", category: "B" }],
      [{ name: "C#", active: false, type: "sharp", category: "C" }, { name: "Db", active: false, type: "flat", category: "D" }],
      [{ name: "D", active: false, type: "standard", category: "D" }],
      [{ name: "D#", active: false, type: "sharp", category: "D"  }, { name: "Eb", active: false, type: "flat", category: "E" }],
      [{ name: "E", active: false, type: "standard", category: "E" }],
      [{ name: "F", active: false, type: "standard", category: "F" }, { name: "E#", active: false, type: "sharp", category: "E" }],
      [{ name: "F#", active: false, type: "sharp", category: "F"  }, { name: "Gb", active: false, type: "flat", category: "G" }],
      [{ name: "G", active: false, type: "standard", category: "G" }],
      [{ name: "G#", active: false, type: "sharp", category: "G"  }, { name: "Ab", active: false, type: "flat", category: "A" }],
      [{ name: "A", active: false, type: "standard", category: "A" }],
      [{ name: "A#", active: false, type: "sharp", category: "A"  }, { name: "Bb", active: false, type: "flat", category: "B" }],
      [{ name: "B", active: false, type: "standard", category: "B"}],
    ];

    let notesInUse = {C: false, D: false, E: false, F: false, G: false, A: false, B: false};
    var startIndex = id;
    for (var step of scales[scale]){
      startIndex += step;
      var noteRow = notes[startIndex % notes.length];
      var correctNote = noteRow[0];
      if (noteRow.length > 1 && notesInUse[correctNote.category]){
        correctNote = noteRow[1];
      }
      correctNote.active = true;
      notesInUse[correctNote.category] = true;
    }

    var noteNodes = [];
    var noteColStyle = {
      marginRight: "23px"
    };
    const distinctNotes = ["C", "D", "E", "F", "G", "A", "B"];
    for (var note of distinctNotes){
      noteNodes.push(
        <div class="col-xs-1" style={noteColStyle}>
        {
          notes.reduce((prev, curr) => prev.concat(curr))
          .filter(({category}) => category == note)
          .sort(function(a, b){
            if (a.type == "standard"){
              return -1;
            }
            if (a.type == "sharp" && b.type == "flat"){
              return -1
            }
            return 1;
          })
          .map(({name, active}, i) => <Note key={i} name={name} active={active}/>)
        }
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