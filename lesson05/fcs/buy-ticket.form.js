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
        fullName: formBuyTicket.elements.fullname.value,
        seatType: parseInt(formBuyTicket.elements.seatType.value)
    };

    try {
        const ticket = buyTicket(world.flights, formData.flightName, Date.now(), formData.fullName, type = formData.seatType);
        createDivTicket(ticket);
        alert('You successfully buy ticket');
    } catch (error) {
        console.error(error);
        alert(error.message);
    }

    updateView();

    formBuyTicket.reset();
}

function createDivTicket(ticket) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const ul = document.createElement("ul");

    h2.textContent = "Ticket " + ticket.id
    div.append(h2);

    const li1 = document.createElement("li");
    li1.textContent = "Seat: " + ticket.seat
    ul.append(li1);

    const li2 = document.createElement("li");
    li2.textContent = "Type: " + ticket.type
    ul.append(li2);

    const li3 = document.createElement("li");
    li3.textContent = "FullName: " + ticket.fullName
    ul.append(li3);

    div.append(ul);
    document.body.append(div)
}
