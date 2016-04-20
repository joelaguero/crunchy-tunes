import React from 'react';
import d3Visual from './d3Visual';

const seedData = [133, 100, 30, 99, 153, 170, 249, 253, 75, 116, 109, 203];

// this is the component that contains the visualization. the visualization is rendered
// by passing state to a d3 object that handles all d3 rendering. the d3 object is
// designed to be stateless, meaning it doesn't hold on to any state-related data that
// gets passed to it.
class Visualization extends React.Component {
  componentDidMount() {
    const el = this.refs.DOMnode;
    d3Visual.create(el, {
      width: '100%',
      height: '500px',
    });
  }

  render() {
    return (
      <div
        ref="DOMnode"
        className="visualization"
      >
        { seedData }
      </div>);
  }
}

export default Visualization;
