document.addEventListener("DOMContentLoaded", function () {
    fetch('./data/rentals.json')
        .then(response => response.json())
        .then(data => displayRentals(data.rentals))
        .catch(error => console.error('Error fetching rentals:', error));
});

function displayRentals(rentals) {
    const rentalsContainer = document.getElementById('rentalsContainer');

    rentals.forEach(rental => {
        const rentalCard = document.createElement('div');
        rentalCard.classList.add('rental-card');

        const rentalImage = document.createElement('img');
        rentalImage.src = rental.imageURL;
        rentalImage.alt = rental.name;
        rentalCard.appendChild(rentalImage);

        const rentalName = document.createElement('h2');
        rentalName.textContent = rental.name;
        rentalCard.appendChild(rentalName);

        const rentalCategory = document.createElement('p');
        rentalCategory.textContent = `Category: ${rental.category}`;
        rentalCard.appendChild(rentalCategory);

        const rentalMaxPersons = document.createElement('p');
        rentalMaxPersons.textContent = `Max Persons: ${rental.max_persons}`;
        rentalCard.appendChild(rentalMaxPersons);

        const rentalReservation = document.createElement('p');
        rentalReservation.textContent = `Reservation (Half/Full Day): $${rental.half_day_reservation}/$${rental.full_day_reservation}`;
        rentalCard.appendChild(rentalReservation);

        const rentalWalkIn = document.createElement('p');
        rentalWalkIn.textContent = `Walk-In (Half/Full Day): $${rental.half_day_walk_in}/$${rental.full_day_walk_in}`;
        rentalCard.appendChild(rentalWalkIn);

        rentalsContainer.appendChild(rentalCard);
    });
}
