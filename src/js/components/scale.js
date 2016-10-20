import React from "react";
import Note from "./note.js";

export default class Scale extends React.Component {

  getNotesForColumn(notes, note) {
    return notes.reduce((prev, curr) => prev.concat(curr))
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

  render() {
    const id = this.props.keyId;
    const scale = this.props.scale;

    //Numbers represent steps to take for the scale's pattern. 1 = Half, 2 = Whole. 
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

    //Iterate through the scale's steps, setting the appropriate notes to active.
    //Determine which name to use (IE C vs B#) based on which notes have already been activated.
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

    //Filter and sort columns of each "category" for display on the page.
    var noteNodes = [];
    for (var note of ["C", "D", "E", "F", "G", "A", "B"]){
      noteNodes.push(
        <div class="col-md-1 col-sm-1 col-xs-1">
        {this.getNotesForColumn(notes, note)}
        </div>
      )
    }
    return (
      <div>
        <div class="row seven-cols">
          {noteNodes}
        </div>
      </div>
    );
  }
}