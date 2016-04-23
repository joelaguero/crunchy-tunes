import React from 'react';
import d3moods from '../../utils/d3Visuals/d3moods';

// this is the component that contains the visualization. the visualization is rendered
// by passing data to a d3 object that handles all d3 rendering. the d3 object is
// designed to be stateless, meaning it doesn't hold on to any state-related data that
// gets passed to it.
class Moods extends React.Component {
  componentDidMount() {
    const el = this.refs.DOMnode;
    d3moods.create(el, {
      width: '100%',
      height: '100%',
    }, this.getVisualState(), this.getSongFeatures() );
  }

  componentDidUpdate() {
    const el = this.refs.DOMnode;
    d3moods.update(el, this.getVisualState(), this.getSongFeatures());
  }

  getSongFeatures() {
    return this.props.songFeatures;
  }

  // helper function for getting the visual state
  // this allows us to extend it later with different information beyond audioData
  getVisualState() {
    return this.props.audioData;
  }

  render() {
    return (
      <div ref="DOMnode" className="moods"></div>
    );
  }
}

Moods.propTypes = {
  audioData: React.PropTypes.array.isRequired,
};

export default Moods;
