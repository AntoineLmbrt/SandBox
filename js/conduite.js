const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const speedValue = document.querySelector(".speed-value");

var coords = [];
var interval = null;
var speed = 0;

function start() {
    startBtn.classList.add("remove");
    stopBtn.classList.remove("remove");
    interval = setInterval(getLocation, 1000);
}

function stop() {
    stopBtn.classList.add("remove");
    startBtn.classList.remove("remove");
    clearInterval(interval);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updateSpeed);
    } else {
        alert("La géolocalisation n'est pas possible sur ce navigateur");
    }
}

function updateSpeed(position) {
    coords[coords.length] = position.coords;
    if (coords.length>2)
        speed = 3600*getDistance(coords[coords.length-2], coords[coords.length-1])/1000;
    speedValue.innerHTML = Math.round(speed);
}

function getDistance(coords1, coords2) {
    earthRadius = 6371000;
    const lat = rad(coords2.latitude-coords1.latitude);
    const long = rad(coords2.longitude-coords1.longitude);
    const a = Math.sin(lat/2)*Math.sin(lat/2) + Math.cos(rad(coords1.latitude))*Math.cos(rad(coords2.latitude))*Math.sin(long/2)*Math.sin(long/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return earthRadius * c;
}

function rad(angle) {
    return angle * Math.PI/180;
}
