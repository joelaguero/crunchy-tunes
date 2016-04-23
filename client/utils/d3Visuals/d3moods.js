import d3 from 'd3';

const d3moods = {};


d3moods.create = function create(el, props, audioData, songFeatures) {

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

d3moods.update = function update(el, audioData, songFeatures) {
  var valence = songFeatures.valence;
  console.log("Song Valence: ", valence);

  // Ensure valence values don't go out of the color range
  if (valence < 0.1) {
    valence = 0.1;
  }
  if (valence > 0.9) {
    valence = 0.9;
  }

  const svg = d3.select(el).select('svg');

  var color = d3.scale.linear()
    .domain([0, 0.25, 0.5, 0.75, 1])
    .range(["purple", "blue", "green", "yellow", "red"]);

  const circles = svg.selectAll('.circle')
    .data(audioData[0]);
  circles
    .enter()
    .append('circle')
    .attr('class', 'circle');

  circles
    .attr('r', (d) => (d * 0.55))
    .style('fill', () => (color((Math.random() * 0.2) + valence)) )
    .style('opacity', '.75');

  circles
    .exit()
    .remove();
};

export default d3moods;
