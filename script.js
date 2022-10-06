const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

//ishin-release-date
const newYears = "21 Feb 2023";

//countdown
function countdown() {
    const ishinDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (ishinDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

//formatting single-digit time
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//initial call
countdown();

//countdown-refresh
setInterval(countdown, 1000);
