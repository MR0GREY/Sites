const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progressContainer');
const timeDisplay = document.getElementById('time');
const volumeSlider = document.getElementById('volume');

function togglePlayPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

playPauseBtn.addEventListener('click', togglePlayPause);

video.addEventListener('play', () => {
  playPauseBtn.innerHTML = '<img src="img/pause.png" width="30" height="30" alt="Pause">';
});

video.addEventListener('pause', () => {
  playPauseBtn.innerHTML = '<img src="img/play.png" width="30" height="30" alt="Play">';
});

// Обновление прогресса и времени
video.addEventListener('timeupdate', () => {
  const progressPercent = (video.currentTime / video.duration) * 100;
  progress.style.width = progressPercent + '%';

  // Форматирование времени
  const minutes = Math.floor(video.currentTime / 60);
  const seconds = Math.floor(video.currentTime % 60).toString().padStart(2, '0');
  timeDisplay.textContent = `${minutes}:${seconds}`;
});

// Перемещение по прогрессу
progressContainer.addEventListener('click', (e) => {
  const rect = progressContainer.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  const newTime = (clickX / width) * video.duration;
  video.currentTime = newTime;
});

// Управление громкостью
volumeSlider.addEventListener('input', () => {
  video.volume = volumeSlider.value;
});