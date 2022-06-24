import {startTimer} from './utility.js';

let startBtn = document.getElementById('start');
startBtn.addEventListener('click', (event) => {
    startTimer(startBtn);
});
