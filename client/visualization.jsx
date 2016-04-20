import React from 'react';

const seedData = [133, 100, 30, 99, 153, 170, 249, 253, 75, 116, 109, 203];

class Visualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioData: seedData,
    };
  }

  render() {
    return (<div className="visualization">{ seedData }</div>);
  }
}

export default Visualization;
