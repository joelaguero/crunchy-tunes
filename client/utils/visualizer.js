const sampleDOMElement = function sampleDOMElement(DOMElementID) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext);
  this.player = document.getElementById(DOMElementID);
  this.source = audioCtx.createMediaElementSource(this.player);
  this.analyser = audioCtx.createAnalyser();
  this.analyser.fftSize = 256;
  this.source.connect(this.analyser);
  this.analyser.connect(audioCtx.destination);
};

sampleDOMElement.prototype.sampleAudioStream =
function sampleAudioStream(analyser, strData, callback) {
  analyser.getByteFrequencyData(strData);
  let volume = 0;
  for (let i = 0; i < strData.length; i++) {
    // $('#band-' + i).css('height', streamData[i] / 256 * 100 + 'px');
    // $('#band-' + i).css('background-color',
    // 'hsl('+ (325 - (streamData[i] / (256) * 360)) % 360+', 100%, 50%)');
    volume += strData[i];
  }
  if (callback) {
    callback(strData);
  }
  return volume;
};

export default sampleDOMElement;
