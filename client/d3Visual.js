import d3 from 'd3';

const d3Visual = {};

d3Visual.create = function create(el, props) {
  const svg = d3.select(el).append('svg')
    .attr('class', 'd3')
    .attr('width', props.width)
    .attr('height', props.height);

  svg.append('g')
    .attr('class', 'd3-points');

  // this.update(el, state);
};

export default d3Visual;
