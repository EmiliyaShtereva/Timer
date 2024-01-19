let conteiner = document.querySelector('.conteiner');
let formConteiner = document.querySelector('.form');
let hoursEl = document.getElementById('hours');
let minutesEl = document.getElementById('minutes');
let secondsEl = document.getElementById('seconds');
let startBtn = document.querySelector('.control-btn');
let timeBtn = document.querySelector('.time-btn');
let submitBtn = document.querySelector('.submit-btn');

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
submitBtn.addEventListener('click', submitHandler);

function startHandler() {
    hours = Number(hoursEl.innerText) * 3600;
    minutes = Number(minutesEl.innerText) * 60;
    seconds = Number(secondsEl.innerText);
    time = hours + minutes + seconds;

    if (interval === null) {
        if (time === 0) return;

        interval = setInterval(() => {
            time--;
            updateTime();

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

function submitHandler(e) {
    e.preventDefault();
    let form = e.target.parentElement;
    let formData = new FormData(form);

    let hours = Number(formData.get('hours'));
    let minutes = Number(formData.get('minutes'));
    let seconds = Number(formData.get('seconds'));

    if (hours > 99) {
        hours = 99;
    }

    if (minutes >= 60) {
        minutes = 59;
    }

    if (seconds >= 60) {
        seconds = 59
    }

    hoursEl.innerText = hours.toString().padStart(2, '0');
    minutesEl.innerText = minutes.toString().padStart(2, '0');
    secondsEl.innerText = seconds.toString().padStart(2, '0');

    form.reset();

    formConteiner.style.display = 'none';
    conteiner.style.display = 'inline';
}