import React from 'react';
import d3Visual from '../utils/d3Visual';

// this is the component that contains the visualization. the visualization is rendered
// by passing data to a d3 object that handles all d3 rendering. the d3 object is
// designed to be stateless, meaning it doesn't hold on to any state-related data that
// gets passed to it.
class Visualization2 extends React.Component {
  componentDidMount() {
    const el = this.refs.DOMnode;
    d3Visual.create(el, {
      width: '100%',
      height: '100%',
    }, this.getVisualState());
  }

  componentDidUpdate() {
    const el = this.refs.DOMnode;
    d3Visual.update(el, this.getVisualState());
  }

  // helper function for getting the visual state
  // this allows us to extend it later with different information beyond audioData
  getVisualState() {
    return this.props.audioData;
  }

  render() {
    return (
        <div ref="DOMnode" className="visualization2"></div>
    );
  }
}

Visualization2.propTypes = {
  audioData: React.PropTypes.array.isRequired,
};

export default Visualization2;
