'use strict';

/**
 * Создание таймштампа для времени
 * @param {number} hours Часы
 * @param {number} minutes Минуты
 * @returns {number} таймштамп
 */
function makeTime(hours, minutes) {
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
}

function displayFlights() {
    console.log('*** List of all flights ***');
    console.table(flights);
}

// function flightDetails(flightName) {
//     const flight = flights[flightName];
//     if (!flight) {
//         console.warn('Flight not found');
//         return;
//     }
//     const name = document.createElement("p")
//     name.textContent = flight.name;
//
//     const seats = document.createElement("p")
//     seats.textContent = flight.seats;
//     console.log(name);
// }

function random(from, to) {
    return Math.floor(Math.random() * (to - from) + from);
}
