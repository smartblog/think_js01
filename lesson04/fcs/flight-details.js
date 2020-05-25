function flightDetails(flightName) {
    const flight = flights[flightName];
    if (!flight) {
        console.warn('Flight not found');
        return;
    }

    const div = document.getElementById("flight-details");

    const h1 = document.createElement("h1");
    h1.textContent = "Flight Details"

    div.append(h1);

    const name = document.createElement("p")
    name.textContent = "FlightName: " + flight.name;

    div.append(name)

    const seats = document.createElement("p")
    seats.textContent = "Seats: " + flight.seats;

    div.append(seats)

    const tickets = flight.tickets;

    const divTickets = document.createElement("div")
    const h2 = document.createElement("h2")
    h2.textContent = "Tickets list"

    divTickets.append(h2)

    for ( let i = 0 ; i < tickets.length ; i++ ) {
      let ticket = tickets[i];
      let pId = document.createElement("p")
      pId.textContent = "ID: " + ticket.id;

      divTickets.append(pId)

      let pFullName = document.createElement("p")
      pFullName.textContent = "Fullname: " + tickets[i].fullName;

      divTickets.append(pFullName)
    }

    div.append(divTickets);
}
