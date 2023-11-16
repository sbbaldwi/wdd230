const apiKey = 'c6788a8407a7cc25e447409c0992dd7a';
const city = 'Chandler';
const country = 'US';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${apiKey}`;

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;

        document.getElementById('temperature').textContent = temperature + "°F";
        document.getElementById('description').textContent = description;
        document.getElementById('icon').setAttribute('src', `http://openweathermap.org/img/w/${iconCode}.png`);
        document.getElementById('icon').setAttribute('alt', description);
    })
    .catch(error => {
        console.error('There was a problem fetching the weather data:', error);
    });
