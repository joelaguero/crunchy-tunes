import d3 from 'd3';

const d3Visual = {};

d3Visual.create = function create(el, props, audioData) {
  const svg = d3.select(el).append('svg')
    .attr('class', 'visualization-canvas')
    .attr('width', props.width)
    .attr('height', props.height);

  const circles = svg.selectAll('circle')
    .data(audioData[0])
    .enter()
    .append('circle')
    .attr('r', (d) => (d * 0.55))
    .attr('cx', '50%')
    .attr('cy', '150px')
    .attr('class', 'circle');

  circles
    .style('fill', () => (`#${Math.floor(Math.random() * 16777215).toString(16)}`))
    .style('opacity', '.05');
};

d3Visual.update = function update(el, audioData) {
  const svg = d3.select(el).select('svg');

  const circles = svg.selectAll('.circle')
    .data(audioData[0]);
  circles
    .enter()
    .append('circle')
    .attr('class', 'circle');

  circles
    .attr('r', (d) => (d * 0.55))
    .style('fill', () => (`#${Math.floor(Math.random() * 16777215).toString(16)}`))
    .style('opacity', '.05');

  circles
    .exit()
    .remove();
};

export default d3Visual;
