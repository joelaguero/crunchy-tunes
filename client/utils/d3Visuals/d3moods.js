import d3 from 'd3';

const d3moods = {};

d3moods.generate = {
  r: 0,
  g: 255,
  b: 0,
  valence: 0,
};

d3moods.create = function create(el, props, audioData, songFeatures) {
  
  console.log('songFeatures', songFeatures.valence);

  this.generate.valence = songFeatures.valence;

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

  const bands = audioData[0].length;

};

d3moods.update = function update(el, audioData) {
  const svg = d3.select(el).select('svg');

  var color = d3.scale.linear()
    .domain([-1, -0.5, 0, 0.5, 1])
    .range(["red", "yellow", "green", "blue", "purple"]);

  const circles = svg.selectAll('.circle')
    .data(audioData[0]);
  circles
    .enter()
    .append('circle')
    .attr('class', 'circle');

  circles
    .attr('r', (d) => (d * 0.55))
    .style('fill', () => (color(.5)) )
    .style('opacity', '.1');

  circles
    .exit()
    .remove();
};

export default d3moods;
