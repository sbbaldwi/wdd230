
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2) + "°F";
    } else {
        return "N/A";
    }
}

const temperatureElement = document.getElementById("temperature");
const windSpeedElement = document.getElementById("wind-speed");
const windChillElement = document.getElementById("wind-chill");

const temperatureValue = parseFloat(temperatureElement.textContent);
const windSpeedValue = parseFloat(windSpeedElement.textContent);

const windChill = calculateWindChill(temperatureValue, windSpeedValue);

windChillElement.textContent = windChill;
