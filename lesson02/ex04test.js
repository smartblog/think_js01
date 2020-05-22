/**
 * Функция проверки формата номер рейса
 *
 * @param {string} flight номер рейса
 * @returns boolean успешна ли проверка
 */
function checkFlightFormat(flight) {
    if (typeof flight !== "string")
        throw new Error('Flight format is incorrect');

    return true;
}

/**
 * Функция проверки Регистрация завершена или самолет улетел
 * @param {Object} flight рейс
 * @param {number} nowTime текущее время
 * @returns boolean успешна ли проверка
 */
function checkFlightComplete(flight, nowTime) {
    if ( flight.registrationEnds < nowTime ) {
        return true;
    } else {
        return false;
    }
}
