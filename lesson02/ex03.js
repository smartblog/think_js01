/**
 * Функция пробует произвести электронную регистрацию пассажира
 *
 *  * проверка билета
 *  * проверка данных пассажира
 *  * электронную регистрацию можно произвести только в период от 5 до 1 часа до полета
 *
 * @param {string} ticketId номер билета
 * @param {string} fullName имя пассажира
 * @param {number} nowTime текущее время
 * @returns boolean успешна ли регистрация
 */
function eRegistration(ticketId, fullName, nowTime) {
    checkTicketFormat(ticketId);
    checkTime(nowTime);
    checkFullName(fullName);

    const flightId = ticketId.split("-")[0];

    flight = findFlight(flightId);

    ticket = checkAndFindTicket(flight, ticketId)

    checkPassangerData(ticket, fullName);

    if (checkRegTime(flight.registrationEnds, nowTime)) {
      ticket.registrationTime = nowTime;
      return true;
    } else {
      return false;
    }
}

console.log(eRegistration(a.id, "Petrov I. I.", Date.now()))
