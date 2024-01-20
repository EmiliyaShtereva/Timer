export function updateTime(time) {
    let hoursEl = document.getElementById('hours');
    let minutesEl = document.getElementById('minutes');
    let secondsEl = document.getElementById('seconds');

    hoursEl.innerText = formatTime(time).hours;
    minutesEl.innerText = formatTime(time).minutes;
    secondsEl.innerText = formatTime(time).seconds;
}

function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time / 3600) * 60) % 60;
    let seconds = time % 60;

    return {
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
    }
}