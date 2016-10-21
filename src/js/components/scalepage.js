import React from "react";
import Menu from "./menu.js"
import Scale from "./scale.js"

export default class ScalePage extends React.Component {
  constructor(){
    super();
    this.state = {
      keyId: 0,
      scale: "major",
    }
  }

  changeKey(keyId){
    this.setState({keyId})
  }

  changeScale(scale){
    this.setState({scale});
  }

  render() {
    const jumboStyle = {
      marginTop: "15px"
    }
    return (
        <div class="jumbotron col-md-8 col-md-offset-2" style={jumboStyle}>
          <div class="row">
            <h1 class="text-center">Scale Generator</h1>
          </div>
          <div class="row">
            <div class="text-center">
            <Menu changeKey={this.changeKey.bind(this)} changeScale={this.changeScale.bind(this)} />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <Scale keyId={this.state.keyId} scale={this.state.scale}/>
            </div>
          </div>
        </div>
    );
  }
}