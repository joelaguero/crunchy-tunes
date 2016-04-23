import d3 from 'd3';

const d3bars = {};

d3bars.create = function create(el, props, audioData) {
  const svg = d3.select(el).append('svg')
    .attr('class', 'visualization-canvas')
    .attr('width', props.width)
    .attr('height', props.height);

  const bands = audioData[0].length;

  // const spectrogram = d3.select(el).append('svg')
  //   .attr('class', 'visualization-canvas')
  //   .attr('width', props.width)
  //   .attr('height', props.height);

  const bars = svg.selectAll('rect')
    .data(audioData[0])
    .enter()
    .append('rect')
    .attr('height', (d) => ((d / 255) * 100 + '%'))
    .attr('width', (d) => ((100 / bands * 0.5) + '%'))
    .attr('x', (d, i) => ((i * 5) + 'px'))
    .attr('y', (d) => (100 - (d / 255) * 100) + '%')
    .attr('class', 'rect');

  bars
    .style('fill', () => ('#000'))
    .style('opacity', '.90');
};

d3bars.update = function update(el, audioData) {
  const svg = d3.select(el).select('svg');

  const bars = svg.selectAll('.rect')
    .data(audioData[0]);
  bars
    .enter()
    .append('rect')
    .attr('class', 'rect');

  bars
    .attr('height', (d) => ((d / 255) * 100 + '%'))
    .attr('y', (d) => (100 - (d / 255) * 100) + '%')
    .style('fill', () => ('#000'))
    // .style('opacity', '.05');

  bars
    .exit()
    .remove();
};

export default d3bars;
