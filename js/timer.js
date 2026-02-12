let remaining;
let totalSeconds;
let circumference;
let progress;
let display;

function update() {
    display.textContent = remaining;

    const offset = circumference * (1 - remaining / totalSeconds);
    progress.style.strokeDashoffset = offset;

    if (remaining <= 0) {
        progress.style.display = 'none';
    } else {
        remaining--;
        setTimeout(update, 1000);
    }
}

function startTimer() {
    totalSeconds = 30;
    remaining = totalSeconds;
    circumference = 2 * Math.PI * 35;
    progress = document.getElementById('js-timer__progress');
    display = document.getElementById('js-timer__display');
    progress.style.display = '';
    update();
}

startTimer();