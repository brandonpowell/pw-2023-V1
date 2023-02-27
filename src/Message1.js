import React, { Component } from "react";
import PlayWidget from 'react-spotify-widgets';

class Message1 extends Component {
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
          <h1>coming soon</h1> 
          <div className="line"></div>
          <p>provide our loved community with helpful information by creating a radio station on the internet.</p>
          <div className="line"></div>
          <h2>listen to some music while you sit back and relax.</h2>
          <PlayWidget
            width={500}
            height={280}
            uri={'spotify:playlist:0RrfJvZ2LMSn5XKAC8mpr0?si=bfcd008e4c2c4636'}
          />
        </div>
      </div>
  )}
}

export default Message1;