import React from 'react';
import d3Visual from './d3Visual';

// this is the component that contains the visualization. the visualization is rendered
// by passing data to a d3 object that handles all d3 rendering. the d3 object is
// designed to be stateless, meaning it doesn't hold on to any state-related data that
// gets passed to it.
class Visualization extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    const el = this.refs.DOMnode;
    d3Visual.create(el, {
      width: '100%',
      height: '500px',
    }, this.props.audioData);
  }

  render() {
    return (
      <div ref="DOMnode" className="visualization">{this.props.audioData}</div>);
  }
}

Visualization.propTypes = {
  audioData: React.PropTypes.number,
};

export default Visualization;
