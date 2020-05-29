const formBuyTicket = document.getElementById('buy-ticket-form');

formBuyTicket.addEventListener('submit', submitBuyTicket);

/**
 * Обработчик отправки формы
 * @param {KeyboardEvent} event
 */
function submitBuyTicket(event) {
    // прерываем всплытие что бы форма не отправлялась
    event.preventDefault();

    const formData = {
        flightName: formBuyTicket.elements.flight.value,
        fullName: formBuyTicket.elements.fullname.value
    };

    try {
        buyTicket(world.flights, formData.flightName, Date.now(), formData.fullName, type = 0);
        alert('You successfully buy ticket');
    } catch (error) {
        console.error(error);
        alert(error.message);
    }

    updateView();

    formBuyTicket.reset();
}
