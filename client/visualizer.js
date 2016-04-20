var bands = 100;
var streamData = new Uint8Array(bands);

// for (var i = 0; i < bands; i++) {
//   $('#visualizer').prepend('<div class="band" id="band-'+ i +'"></div>')
// }

var sampleDOMElement = function(DOMElementID) {
  var audioCtx = new (window.AudioContext || window.webkitAudioContext);
  this.player = document.getElementById(DOMElementID);
  this.source = audioCtx.createMediaElementSource(player);
  this.analyser = audioCtx.createAnalyser();
  this.analyser.fftSize = 256;
  this.source.connect(this.analyser);
  this.analyser.connect(audioCtx.destination);
  setInterval(function() { this.sampleAudioStream(analyser, streamData); }, 10);
}

sampleDOMElement.prototype.sampleAudioStream = function(analyser, streamData) {
    analyser.getByteFrequencyData(streamData);
    // calculate an overall volume value
    var volume = 0;
    for (var i = 0; i < streamData.length; i++) {
      // $('#band-' + i).css('height', streamData[i] / 256 * 100 + 'px');
      // $('#band-' + i).css('background-color', 'hsl('+ (325 - (streamData[i] / (256) * 360)) % 360+', 100%, 50%)');
      volume += streamData[i];
    }
    return volume;
    // console.log(streamData);
    // console.log(volume);
};




// var sampleAudioStream = function(analyser, streamData) {
//     analyser.getByteFrequencyData(streamData);
//     // calculate an overall volume value
//     var volume = 0;
//     for (var i = 0; i < streamData.length; i++) {
//       // $('#band-' + i).css('height', streamData[i] / 256 * 100 + 'px');
//       // $('#band-' + i).css('background-color', 'hsl('+ (325 - (streamData[i] / (256) * 360)) % 360+', 100%, 50%)');
//       volume += streamData[i];
//     }
//     return volume;
//     // console.log(streamData);
//     // console.log(volume);
// };

// var audioCtx = new (window.AudioContext || window.webkitAudioContext);
// var player = document.getElementById('player');
// var source = audioCtx.createMediaElementSource(player);
// var analyser = audioCtx.createAnalyser();
// analyser.fftSize = 256;
// source.connect(analyser);
// analyser.connect(audioCtx.destination);
//
// setInterval(function() { sampleAudioStream(analyser, streamData); }, 10);

export default sampleDOMElement;
