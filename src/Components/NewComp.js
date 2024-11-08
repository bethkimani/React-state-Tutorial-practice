import React, { Component } from 'react';

import bellA from './BellA.png';
import bellB from './BellB.png';

export class NewComp extends Component {
  constructor(props) {
    super(props);

    // Fixed missing commas in state initialization
    this.state = {
      message: 'Subscribe to SimpleLearn',
      sub: 'Subscribe',
      imageURL: bellA, // Fixed reference to bellA
    };
  }

  // CSS styles object is fine, no changes needed
  style = {
    fontStyle: 'italic',
    color: 'purple',
  };

  Buttonchange = () => {
    // Fixed missing commas in setState
    this.setState({
      message: 'Hit the bell icon to never miss an update',
      sub: 'Subscribed', // Added missing comma
    });
  };

  imageChange = () => {
    // Fixed missing commas in setState
    this.setState({
      imageURL: bellB,
      message: 'Thank you! Happy learning!',
    });
  };

  render() {
    return (
      <div className="App">
        <h3 style={this.style}>{this.state.message}</h3>

        <button onClick={this.Buttonchange}>{this.state.sub}</button>

        <p />
        {/* Fixed CSS object syntax in the img tag */}
        <img
          style={{ width: '30px', height: '30px' }}
          onClick={this.imageChange}
          src={this.state.imageURL}
          alt="bell icon"
        />
      </div>
    );
  }
}

export default NewComp;
