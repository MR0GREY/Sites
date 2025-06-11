let timerInterval;
let seconds = 0;
let isRunning = false;
const timerDisplay = document.getElementById('timer');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

function updateTimer() {
    seconds++;
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startStop() {
    if (isRunning) {
        clearInterval(timerInterval);
        startStopButton.textContent = 'Старт';
    } else {
        timerInterval = setInterval(updateTimer, 1000);
        startStopButton.textContent = 'Стоп';
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    isRunning = false;
    startStopButton.textContent = 'Старт';
    timerDisplay.textContent = '00:00';
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', resetTimer);