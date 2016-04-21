const bands = 100;
const streamData = new Uint8Array(bands);

// for (var i = 0; i < bands; i++) {
//   $('#visualizer').prepend('<div class="band" id="band-'+ i +'"></div>')
// }

const sampleDOMElement = function sampleDOMElement(DOMElementID) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext);
  this.player = document.getElementById(DOMElementID);
  this.source = audioCtx.createMediaElementSource(this.player);
  this.analyser = audioCtx.createAnalyser();
  this.analyser.fftSize = 256;
  this.source.connect(this.analyser);
  this.analyser.connect(audioCtx.destination);
  const context = this;
  setInterval(() => (context.sampleAudioStream(context.analyser, streamData)), 10);
};

sampleDOMElement.prototype.sampleAudioStream = function sampleAudioStream(analyser, strData) {
  analyser.getByteFrequencyData(strData);
  // calculate an overall volume value
  let volume = 0;
  for (let i = 0; i < strData.length; i++) {
    // $('#band-' + i).css('height', strData[i] / 256 * 100 + 'px');
    // $('#band-' + i)
    //   .css('background-color', 'hsl('+ (325 - (strData[i] / (256) * 360)) % 360+', 100%, 50%)');
    volume += strData[i];
  }
  // console.log(strData);
  // console.log(volume);
  return volume;
};

export default sampleDOMElement;
