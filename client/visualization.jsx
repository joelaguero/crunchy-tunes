import React from 'react';

const seedData = [133, 100, 30, 99, 153, 170, 249, 253, 75, 116, 109, 203];

const Visualization = () => {
  console.log('inside visualization');
  return (<div className="visualization">{ seedData }</div>);
};

export default Visualization;
