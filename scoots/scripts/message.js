const apiKey = 'c6788a8407a7cc25e447409c0992dd7a';
const city = 'Cozumel';
const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

function displayTemperatureMessage() {
    fetch(weatherAPI)
        .then(response => response.json())
        .then(data => {
            const tempMax = data.main.temp_max;
            const messageContainer = document.getElementById('temperature-message');
            const highTemperatureElement = document.getElementById('high-temperature');

            if (tempMax) {
                highTemperatureElement.textContent = tempMax + '°C';
                messageContainer.style.display = 'block';
            }
        })
        .catch(error => console.error('Error fetching temperature:', error));
}

function closeTemperatureMessage() {
    const messageContainer = document.getElementById('temperature-message');
    messageContainer.style.display = 'none';
}

function displayTemperatureMessage() {
    fetch(weatherAPI)
        .then(response => response.json())
        .then(data => {
            const tempMax = data.main.temp_max;
            const messageContainer = document.getElementById('temperature-message');
            const highTemperatureElement = document.getElementById('high-temperature');

            if (tempMax !== undefined && tempMax !== null) {
                highTemperatureElement.textContent = tempMax + '°C';
                messageContainer.style.display = 'block';
            } else {
                messageContainer.style.display = 'none'; // Hide the message if no temperature data
            }
        })
        .catch(error => console.error('Error fetching temperature:', error));
}


window.onload = displayTemperatureMessage;
