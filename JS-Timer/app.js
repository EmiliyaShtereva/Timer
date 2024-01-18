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

    interval = setInterval(() => {
        time--;
        hours = Math.floor(time / 3600);
        minutes = Math.floor((time / 3600) * 60) % 60;
        seconds = time % 60;
    }, 1000);
}
