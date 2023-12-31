function createRentalItem(item) {
    var rentalDiv = document.createElement('div');
    rentalDiv.classList.add('rental-card');

    var img = document.createElement('img');
    img.src = item.imageURL;
    rentalDiv.appendChild(img);

    var name = document.createElement('h2');
    name.textContent = item.name;
    rentalDiv.appendChild(name);

    var category = document.createElement('p');
    category.textContent = "Category: " + item.category;
    rentalDiv.appendChild(category);

    var maxPersons = document.createElement('p');
    maxPersons.textContent = "Max Persons: " + item.max_persons;
    rentalDiv.appendChild(maxPersons);

    var halfDayRes = document.createElement('p');
    halfDayRes.textContent = "Half Day Reservation: $" + item.half_day_reservation;
    rentalDiv.appendChild(halfDayRes);

    var fullDayRes = document.createElement('p');
    fullDayRes.textContent = "Full Day Reservation: $" + item.full_day_reservation;
    rentalDiv.appendChild(fullDayRes);

    document.getElementById('rentalsContainer').appendChild(rentalDiv);
}

// Fetch dawg
fetch('https://raw.githubusercontent.com/sbbaldwi/wdd230/main/scoots/data/rentals.JSON')
    .then(response => response.json())
    .then(data => {
        data.rentals.forEach(item => {
            createRentalItem(item);
        });
    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });

function toggleView() {
    var rentalsContainer = document.getElementById('rentalsContainer');
    var priceTable = document.getElementById('priceTable');

    if (rentalsContainer.style.display !== 'none') {
        rentalsContainer.style.display = 'none';
        priceTable.style.display = 'block';
    } else {
        rentalsContainer.style.display = 'flex';
        priceTable.style.display = 'none';
    }
}

document.getElementById('toggleButton').addEventListener('click', toggleView);