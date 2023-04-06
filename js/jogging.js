const play = document.querySelector(".play");
const distanceValue = document.querySelector(".distance-value");
const timerValue = document.querySelector(".timer-value");

const lat = [];
const long = [];
let interval = null;
let distance = 0;
let timer = 0;
let beg;
let end;

function start() {
    beg = new Date();
    play.classList.remove("start");
    play.classList.add("stop");
    interval = setInterval(getLocation, 1000);
}

function stop() {
    end = new Date();
    play.classList.remove("stop");
    play.classList.add("start");
    clearInterval(interval);
    distanceValue.innerHTML = Math.round(distance);
    timerValue.innerHTML = showTimer();
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showDistance);
    } else {
        alert("La géolocalisation n'est pas possible sur ce navigateur");
    }
}

function updateDistance(position) {
    lat[lat.length] = position.coords.latitute;
    long[long.length] = position.coords.longitude;
    for (let i=0 ; i<lat.length-1 ; i++) {
        distance += getDistance(lat[i], long[i], lat[i+1], long[i+1]);
    }
    distanceValue.innerHTML = Math.round(distance);
}

function getDistance(lat1, long1, lat2, long2) {
    earthRadius = 6371000;
    return earthRadius * (Math.PI/2 - Math.asin( Math.sin(rad(lat2)) * Math.sin(rad(lat1)) + Math.cos(rad(long2) - rad(long1)) * Math.cos(rad(lat2)) * Math.cos(rad(lat1))));
}

function rad(angle) {
    return (Math.PI * angle) / 180;
}

function showTimer() {
    timer = end - beg;
    return timer.getHours + "H" + timer.getMinutes + "M" + timer.getSeconds + "S";
}
