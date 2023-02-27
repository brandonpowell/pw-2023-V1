/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Mnifesto from "./manifesto";

class ShowAndHide extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideMnifesto: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
        //If we want a another show and hide button effort we copy the code below.
        case "showHideMnifesto": 
        this.setState({ showHideMnifesto: !this.state.showHideMnifesto });
        break;
      default:
        // eslint-disable-next-line no-unused-expressions
        null;
    }
  }

  render() {
    const { showHideMnifesto } = this.state;
    return (
      <div>
        {showHideMnifesto && <Mnifesto />}
        <div>
          <a onClick={() => this.hideComponent("showHideMnifesto")}>
            our manifesto
          </a>
        </div>
      </div>
    );
  }
}

export default ShowAndHide;
