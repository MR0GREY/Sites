const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});
const audio = document.getElementById('audio');

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
}
