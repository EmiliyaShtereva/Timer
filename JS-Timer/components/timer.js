import { updateTime } from "../utils/updateTime.js";

let conteiner = document.querySelector('.conteiner');
let formConteiner = document.querySelector('.form');
let hoursEl = document.getElementById('hours');
let minutesEl = document.getElementById('minutes');
let secondsEl = document.getElementById('seconds');
let startBtn = document.querySelector('.control-btn');
let timeBtn = document.querySelector('.time-btn');

let interval = null;
let time = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

startBtn.addEventListener('click', startHandler);
timeBtn.addEventListener('click', () => {
    conteiner.style.display = 'none';
    formConteiner.style.display = 'inline';
    stopHandler();
});

function startHandler() {
    hours = Number(hoursEl.innerText) * 3600;
    minutes = Number(minutesEl.innerText) * 60;
    seconds = Number(secondsEl.innerText);
    time = hours + minutes + seconds;

    if (interval === null) {
        if (time === 0) return;

        interval = setInterval(() => {
            time--;
            updateTime(time);

            if (time === 0) stopHandler();

        }, 1000);

        updateClass();
    } else {
        stopHandler();
    }
}

function stopHandler() {
    clearInterval(interval);
    interval = null;
    updateClass();
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