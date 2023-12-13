const apiKey = 'c6788a8407a7cc25e447409c0992dd7a';
const city = 'Cozumel';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

// Fetch current weather data
fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        // Display current temperature
        document.getElementById('current-temperature').textContent = `${data.main.temp}°C`;

        // Display current humidity
        document.getElementById('current-humidity').textContent = `${data.main.humidity}%`;

        // Display current weather description
        document.getElementById('current-description').textContent = data.weather[0].description;
    })
    .catch((error) => {
        console.log('Error fetching weather data:', error);
    });

// Fetch weather forecast for the next day at 3:00 PM
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

fetch(forecastUrl)
    .then((response) => response.json())
    .then((data) => {
        // Filter forecast data for the next day at 3:00 PM
        const nextDayForecast = data.list.find((forecast) => {
            const forecastDateTime = new Date(forecast.dt_txt);
            return forecastDateTime.getHours() === 15; // Check for 3:00 PM
        });

        // Display next day's forecasted temperature
        document.getElementById('next-day-temperature').textContent = `${nextDayForecast.main.temp}°C`;

        // Display next day's weather description
        document.getElementById('next-day-description').textContent = nextDayForecast.weather[0].description;
    })
    .catch((error) => {
        console.log('Error fetching forecast data:', error);
    });
