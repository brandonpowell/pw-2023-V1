import React, { Component } from "react";


class Manifesto extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      ShowHideMessage: false // This mean that the message will be hide from the users. But if we put to true the message will be shown to the users.
    };
  }

  render() {
    return(
      // eslint-disable-next-line no-unreachable
      <div className="MessageBox">
        <div className="ContainerBox">
          <h1>the manifesto</h1> 
        </div>
      </div>
  )}
}

export default Manifesto;