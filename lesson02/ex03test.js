/**
 * Функция проверки формата Билета
 *
 * @param {string} ticketId номер билета
 * @returns boolean успешна ли проверка
 */
function checkTicketFormat(ticketId) {
    if (typeof ticketId !== "string")
        throw new Error('Ticket format incorrect');

    const arr = ticketId.split("-");
    if (arr.length != 2)
        throw new Error('Ticket format is incorrect');

    return true;
}

/**
 * Функция проверки формата времени регистрации
 * @param {number} time время
 * @returns boolean успешна ли проверка
 */
function checkTime(time) {
    if (typeof time !== "number")
        throw new Error('Invalid Time Format');

    return true;
}

/**
 * Функция проверки формата ФИО пассажира
 *
 * @param {string} fullName ФИО пассажира
 * @returns boolean успешна ли проверка
 */
function checkFullName(fullName) {
    if (typeof fullName !== "string")
        throw new Error('FullName format is incorrect');

    return true;
}

/**
 * Функция поиска рейса
 *
 * @param {string} flightId номер рейса
 * @returns Object flight
 */
function findFlight(flightId) {
    const flight = flights[flightId];

    if (!flight)
        throw new Error('Flight not found');

    return flight;
}

/**
 * Функция проверки и поиска билета на рейсе
 *
 * @param {object} flight Рейс
 * @param {string} ticketId номер билета
 * @returns Object ticket
 */
function checkAndFindTicket(flight, ticketId) {
    const ticket = flight.tickets.find(item => item.id === ticketId)

    if (!ticket)
        throw new Error('Ticket not found');

    return ticket;
}

/**
 * Функция проверки пасспортных данных
 *
 * @param {object} ticket Билет
 * @param {string} fullName ФИО пассажира
 * @returns boolean успешна ли проверка
 */
function checkPassangerData(ticket, fullName) {
    if (ticket.fullName !== fullName)
        throw new Error('Passanger Data is incorrect');

    return true;
}

/**
 * Функция проверки доступности времени регистрации
 *
 * @returns boolean успешна ли проверка
 */
function checkRegTime(registrationEnds, nowTime) {
    const timeDiff = (registrationEnds - nowTime) / 3600000;

    if ( timeDiff > 1 && timeDiff < 5 ) {
        return true;
    } else {
        console.warn("Registration time error")
        return false;
    }
}
