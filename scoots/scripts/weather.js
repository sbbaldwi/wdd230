const apiKey = 'c6788a8407a7cc25e447409c0992dd7a';
const city = 'Cozumel';
const country = 'MX';

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=imperial&appid=${apiKey}`;

// Function to convert UNIX timestamp to readable date and time
const formatTime = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
};

// Fetch current weather data
fetch(currentWeatherUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const currentTemperature = data.main.temp;
        const currentHumidity = data.main.humidity;
        const currentDescription = data.weather[0].description;
        const currentIconCode = data.weather[0].icon;

        // Display current weather information
        document.getElementById('current-temperature').textContent = currentTemperature + "°F";
        document.getElementById('current-humidity').textContent = currentHumidity + "%";
        document.getElementById('current-description').textContent = currentDescription;
        document.getElementById('current-icon').setAttribute('src', `http://openweathermap.org/img/w/${currentIconCode}.png`);
        document.getElementById('current-icon').setAttribute('alt', currentDescription);
    })
    .catch(error => {
        console.error('There was a problem fetching the current weather data:', error);
    });

fetch(forecastUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Check the data received from the API

        const currentDate = new Date();

        const nextDayForecast = data.list.find(entry => {
            const date = new Date(entry.dt * 1000);
            return date.getDate() === currentDate.getDate() + 1 && date.getHours() === 15;
        });

        if (nextDayForecast) {
            console.log(nextDayForecast); // Check the next day's forecast data

            const nextDayTemperature = nextDayForecast.main.temp;
            const nextDayDescription = nextDayForecast.weather[0].description;
            const nextDayIconCode = nextDayForecast.weather[0].icon;

            // Display next day's forecasted temperature at 3:00 PM
            document.getElementById('next-day-temperature').textContent = nextDayTemperature + "°F";
            document.getElementById('next-day-description').textContent = nextDayDescription;
            document.getElementById('next-day-icon').setAttribute('src', `http://openweathermap.org/img/w/${nextDayIconCode}.png`);
            document.getElementById('next-day-icon').setAttribute('alt', nextDayDescription);
        } else {
            console.error('No forecast available for the next day at 3:00 PM');
        }
    })
    .catch(error => {
        console.error('There was a problem fetching the forecast data:', error);
    });
