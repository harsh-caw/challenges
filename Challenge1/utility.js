const audio = new Audio('vintage-alarm.wav');

const circle = document.querySelector('.progress_ring');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
circle.style.strokeDasharray = circumference;

let time, refreshIntervalId;
const startingMinutesEL = document.getElementById('min');
const startingSecondsEL = document.getElementById('sec');
startingMinutesEL.defaultValue = '15';
startingSecondsEL.defaultValue = '00';

const btn = document.getElementById('start');
let flag = true;
export const startTimer = () => {
    if (flag) {
        document.getElementById('min').disabled = document.getElementById(
            'sec',
        ).disabled = true;
        time =
            parseInt(startingMinutesEL.value) * 60 +
            parseInt(startingSecondsEL.value);
        flag = false;
    }
    if (btn.textContent === 'start') {
        refreshIntervalId = setInterval(updateCountdown(time), 1000);
    }
    updateBtn();
};

const updateCountdown = (time) => {
    let totalsecs = time;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    let perc = Math.ceil(((totalsecs - time) / totalsecs) * 100);
    setProgress(perc);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    startingMinutesEL.value = `${minutes}`;
    startingSecondsEL.value = `${seconds}`;
    if (time == 0) {
        audio.play();
        circle.style.strokeDashoffset = 0;
        document.getElementsByClassName('ring')[0].style.stroke = 'red';
        setTimeout(function () {
            audio.pause();
        }, 5000);
        return;
    }
    time--;
};

const updateBtn = () => {
    if (btn.textContent === 'start') {
        btn.textContent = 'stop';
    } else {
        btn.textContent = 'start';
        clearInterval(refreshIntervalId);
    }
};

// setting circular progress bar
const setProgress = (percent) => {
    const offset = (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
};

//enabling min and sec input
const img = document.querySelector('img');
img.onclick = () => {
    document.getElementById('min').disabled = document.getElementById(
        'sec',
    ).disabled = false;
};
