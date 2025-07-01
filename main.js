document.addEventListener("DOMContentLoaded", function () {
      const ooInput = document.querySelector('input[value="Yes"]');
      const hindiInput = document.querySelector('input[value="No"]');
      const videosContainer = document.querySelector(".videos");
      const forImage = document.querySelector(".for-image");
      const music = document.querySelector(".background-music");
      const video = document.getElementById("myVideo");
      const audio = document.getElementById("bgMusic");
      const whatifAudio = document.getElementById("whatifAudio");
      const videos = document.getElementById('videos');

      ooInput.addEventListener("change", function () {
        if (this.checked) {
          videosContainer.style.display = "grid";
          forImage.style.display = "block";
          music.style.display = "block";

          video.style.display = "none";
          video.pause();
          whatifAudio.pause();

          audio.play();
        }
      });

      hindiInput.addEventListener("change", function () {
        if (this.checked) {
          videosContainer.style.display = "none";
          forImage.style.display = "none";
          music.style.display = "none";
          videos.style.display = "none"
          audio.pause();

          video.style.display = "block";
         video.muted = true; 
          video.play();

          whatifAudio.play();
        }
      });
    });
