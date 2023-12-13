document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'c6788a8407a7cc25e447409c0992dd7a';
    const city = 'Cozumel';

    var closeButton = document.querySelector('#temperature-message .close');
    var temperatureMessage = document.getElementById('temperature-message');
    var highTemperature = document.getElementById('high-temperature');

    // Fetch temperature data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const tempMax = data.main.temp_max;
            highTemperature.textContent = `${tempMax} °C`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            highTemperature.textContent = 'N/A';
        });

    closeButton.addEventListener('click', function () {
        temperatureMessage.style.display = 'none';
    });
});
