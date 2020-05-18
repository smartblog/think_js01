/**
 * Отчет о рейсе на данный момент
 *
 * @typedef {Object} Report
 * @property {string} flight Номер рейса
 * @property {boolean} registration Доступна регистрация на самолет
 * @property {boolean} complete Регистрация завершена или самолет улетел
 * @property {number} countOfSeats Общее количество мест
 * @property {number} reservedSeats Количество купленных (забронированных) мест
 * @property {number} registeredSeats Количество пассажиров, прошедших регистрацию
 */

/**
* Функция генерации отчета по рейсу
*
*  * проверка рейса
*  * подсчет
*
* @param {string} flight номер рейса
* @param {number} nowTime текущее время
* @returns {Report} отчет
*/

function flightReport(flight, nowTime) {
    checkTime(nowTime);
    checkFlightFormat(flight);

    const flightObject = findFlight(flight);
    registration = checkRegTime(flightObject.registrationEnds, nowTime);

    complete = checkFlightComplete(flightObject, nowTime);

    countOfSeats = flightObject.seats;
    reservedSeats = flightObject.tickets.length;
    registeredSeats = flightObject.tickets.filter(ticket => ticket.registrationTime != null).length;

    return report = { name: flightObject.name,
                      registration: registration,
                      complete: complete,
                      countOfSeats: countOfSeats,
                      reservedSeats: reservedSeats,
                      registeredSeats: registeredSeats
                    };
}

let flightName = "BH118";
console.log(flightReport(flightName, Date.now()))
