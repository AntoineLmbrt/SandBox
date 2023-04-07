const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const distanceValue = document.querySelector(".distance-value");
const timerValue = document.querySelector(".timer-value");
const map = document.querySelector(".map");

var coords = [];
var interval = null;
var distance = 0;
var beg;
var end;

function start() {
    beg = new Date();
    startBtn.classList.add("remove");
    stopBtn.classList.remove("remove");
    interval = setInterval(getLocation, 1000);
}

function stop() {
    end = new Date();
    stopBtn.classList.add("remove");
    startBtn.classList.remove("remove");
    clearInterval(interval);
    distanceValue.innerHTML = Math.round(distance);
    timerValue.innerHTML = "Temps : " + showTimer();
    map.classList.remove("remove");
    showMap();
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updateDistance);
    } else {
        alert("La géolocalisation n'est pas possible sur ce navigateur");
    }
}

function updateDistance(position) {
    coords[coords.length] = position.coords;
    if (coords.length>2)
        distance += getDistance(coords[coords.length-2], coords[coords.length-1]);
    distanceValue.innerHTML = Math.round(distance);
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

function showTimer() {
    var timer = {};
    var tmp = beg - end;

    tmp = Math.floor(tmp/1000);
    timer.sec = tmp % 60;

    tmp = Math.floor(tmp-timer.sec/60);
    timer.min = tmp % 60;

    tmp = Math.floor(tmp-timer.min/60);
    timer.hour = tmp % 24;

    return timer.hour + "H" + timer.min + "M" + timer.sec + "S";
}

function showMap() {
    var options = {
        center: [0,0],
        zoom: 10
    }
    var map = new L.map('map', options);
    var layer = new L.TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png');

    map.addLayer(layer);

    const markers = [];
    const markersCoords = [];

    for (let i=0; i<coords.length; i++) {
        var marker = L.marker([coords[i].latitude, coords[i].longitude]).addTo(map);
        if (i==0) {
            marker.bindPopup("Début de la course").openPopup();
        }
        if (i==coords.length-1) {
            marker.bindPopup("Fin de la course").openPopup();
        }
        markers[markers.length] = marker;
        markersCoords[markersCoords.length] = [coords[i].latitude, coords[i].longitude];
    }

    var polyline = L.polyline(markersCoords, {color: "red"}).addTo(map);

}