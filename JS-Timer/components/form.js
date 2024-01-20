import { updateTime } from "../utils/updateTime.js";

let conteiner = document.querySelector('.conteiner');
let formConteiner = document.querySelector('.form');
let submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', submitHandler);

function submitHandler(e) {
    e.preventDefault();
    let form = e.target.parentElement;
    let formData = new FormData(form);

    let hours = Number(formData.get('hours'));
    let minutes = Number(formData.get('minutes'));
    let seconds = Number(formData.get('seconds'));
    let newTime = hours * 3600 + minutes * 60 + seconds;

    if (hours > 99) {
        hours = 99;
    }

    if (minutes >= 60) {
        minutes = 59;
    }

    if (seconds >= 60) {
        seconds = 59
    }

    updateTime(newTime)

    form.reset();

    formConteiner.style.display = 'none';
    conteiner.style.display = 'inline';
}