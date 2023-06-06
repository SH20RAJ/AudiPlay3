(function () {
  // Function to convert audio tags into custom audio player
  function convertAudioTagsToPlayer() {
    var audioTags = document.querySelectorAll('audio.audioplay');

    audioTags.forEach(function (audio) {
      // Create the custom audio player element
      var player = document.createElement('div');
      player.classList.add('custom-audio-player');

      // Create the play and pause buttons
      var playButton = document.createElement('button');
      playButton.innerText = 'Play';
      var pauseButton = document.createElement('button');
      pauseButton.innerText = 'Pause';

      // Append the buttons to the player
      player.appendChild(playButton);
      player.appendChild(pauseButton);

      // Replace the audio tag with the custom audio player
      audio.parentNode.replaceChild(player, audio);

      // Add event listeners to control playback
      playButton.addEventListener('click', function () {
        audio.play();
      });

      pauseButton.addEventListener('click', function () {
        audio.pause();
      });
    });
  }

  // Call the conversion function when the page finishes loading
  window.addEventListener('load', function () {
    convertAudioTagsToPlayer();
  });
})();
