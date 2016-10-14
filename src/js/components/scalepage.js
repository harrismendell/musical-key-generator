import React from "react";
import Menu from "./menu.js"
import Scale from "./scale.js"

export default class ScalePage extends React.Component {
  constructor(){
    super();
    this.state = {
      keyId: 0,
      scale: "major"
    }
  }

  changeKey(keyId){
    this.setState({keyId})
  }

  changeScale(scale){
    this.setState({scale});
  }

  render() {
    return (
      <div>
        <div class="row">
          <Menu changeKey={this.changeKey.bind(this)} changeScale={this.changeScale.bind(this)} />
        </div>
        <div class="row">
          <Scale keyId={this.state.keyId} scale={this.state.scale}/>
        </div>
      </div>
    );
  }
}