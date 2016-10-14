import React from "react";
import Menu from "./menu.js"
import Scale from "./scale.js"

export default class ScalePage extends React.Component {
  constructor(){
    super();
    this.state = {
      musicalKey: {
        id: 0,
        name: "C",
        scale: "major"
      }
    }
  }

  render() {
    return (
      <div>
        <div class="row">
          <Menu />
        </div>
        <div class="row">
          <Scale musicalKey={this.state.musicalKey}/>
        </div>
      </div>
    );
  }
}