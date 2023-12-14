const url = 'data/rentals.JSON';
const cards = document.querySelector('#cards');

async function getRentalData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        displayRental(data.rentals);
    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
    }
}

getRentalData();

const displayRental = (rentals) => {
    rentals.forEach((rental) => {
        const rentalCard = document.createElement('div');
        rentalCard.classList.add('rental-card');

        const image = document.createElement('img');
        image.setAttribute('src', rental.imageURL);
        image.setAttribute('alt', `Vehicle Type ${rental.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');
        rentalCard.appendChild(image);

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

        cards.appendChild(rentalCard);
    });
}



/*document.addEventListener("DOMContentLoaded", function () {
    fetch('/data/rentals.json')
        .then(response => response.json())
        .then(data => displayRentals(data.rentals))
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



function Func() {
    fetch("data/rental.json")
        .then((res) => {
            return res.json();
        })
        .then((data) => console.log(data));
}*/