/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Message1 from "../src/Message1";

class ShowAndHide extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideMessage1: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
        //If we want a another show and hide button effort we copy the code below.
        case "showHideMessage1": 
        this.setState({ showHideMessage1: !this.state.showHideMessage1 });
        break;
      default:
        // eslint-disable-next-line no-unused-expressions
        null;
    }
  }

  render() {
    const { showHideMessage1 } = this.state;
    return (
      <div>
        {showHideMessage1 && <Message1 />}
        <div>
          <a onClick={() => this.hideComponent("showHideMessage1")}>
            the perceptors radio
          </a>
        </div>
      </div>
    );
  }
}

export default ShowAndHide;
