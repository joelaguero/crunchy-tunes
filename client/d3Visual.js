import d3 from 'd3';

const d3Visual = {};

d3Visual.create = function create(el, props, audioData) {
  const svg = d3.select(el).append('svg')
    .attr('class', 'visualization-canvas')
    .attr('width', props.width)
    .attr('height', props.height);

  const circles = svg.select('circle')
    .data(audioData)
    .enter()
    .append('circle')
    .attr('r', (d) => (d / 2))
    .attr('cx', (d) => (d))
    .attr('cy', (d) => (d));

  circles
    .style('fill', () => (`#${Math.floor(Math.random() * 16777215).toString(16)}`))
    .style('opacity', '.5');
};

export default d3Visual;
