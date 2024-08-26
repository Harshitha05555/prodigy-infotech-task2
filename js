let timer;
let elapsedTime = 0; // Elapsed time in seconds

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return [
        String(hours).padStart(2, '0'),
        String(minutes).padStart(2, '0'),
        String(secs).padStart(2, '0')
    ].join(':');
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

function startStopwatch() {
    timer = setInterval(() => {
        elapsedTime++;
        updateDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(timer);
}

function resetStopwatch() {
    clearInterval(timer);
    elapsedTime = 0;
    updateDisplay();
}

startButton.addEventListener('click', () => {
    startStopwatch();
    startButton.disabled = true; // Disable Start button while running
    stopButton.disabled = false;
    resetButton.disabled = false;
});

stopButton.addEventListener('click', () => {
    stopStopwatch();
    startButton.disabled = false; // Enable Start button to resume
    stopButton.disabled = true;
});

resetButton.addEventListener('click', () => {
    resetStopwatch();
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
});

// Initialize
updateDisplay();
stopButton.disabled = true;
resetButton.disabled = true;
