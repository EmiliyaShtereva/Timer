let hoursEl = document.getElementById('hours');
let minutesEl = document.getElementById('minutes');
let secondsEl = document.getElementById('seconds');
let startBtn = document.querySelector('.control-btn');
let timeBtn = document.querySelector('.time-btn');

let interval = null;
let time = 0;
let hours = Number(hoursEl.innerText) * 3600;
let minutes = Number(minutesEl.innerText) * 60;
let seconds = Number(secondsEl.innerText);

startBtn.addEventListener('click', startHandler);

function startHandler() {
    time = hours + minutes + seconds;

    if (time === 0) return;

    interval = setInterval(() => {
        time--;
        hours = Math.floor(time / 3600);
        minutes = Math.floor((time / 3600) * 60) % 60;
        seconds = time % 60;
        updateTime();

        if (time === 0) {
            stopHandler();
        }

    }, 1000);

    updateClass();
}

function stopHandler() {
    clearInterval(interval);
    interval = null;
    updateClass();
}

function updateTime() {
    hours = Math.floor(time / 3600);
    minutes = Math.floor((time / 3600) * 60) % 60;
    seconds = time % 60;

    hoursEl.innerText = hours.toString().padStart(2, '0');
    minutesEl.innerText = minutes.toString().padStart(2, '0');
    secondsEl.innerText = seconds.toString().padStart(2, '0');
}

function updateClass() {
    if (interval === null) {
        startBtn.innerText = 'Start';
        startBtn.classList.add('start');
        startBtn.classList.remove('pause');
    } else {
        startBtn.innerText = 'Pause';
        startBtn.classList.add('pause');
        startBtn.classList.remove('start');
    }
}