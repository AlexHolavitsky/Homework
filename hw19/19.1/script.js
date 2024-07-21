// ДЗ 19.1. Віджет погоди
// За допомогою запиту вивести виджет погоди. Ресурс API https://openweathermap.org/current
// Також потрібно додати кнопку оновлення данних.




const apiKey = '75ab25fbf68cb452720d81c8128656f3'; // Вставте сюди свій API ключ OpenWeatherMap
const city = 'Odesa'; // Місто, для якого ви хочете отримати погоду

const cityDiv = document.getElementById('city');
const datetimeDiv = document.getElementById('datetime');
const weatherIcon = document.getElementById('weather-icon');
const temperatureDiv = document.getElementById('temperature');
const descriptionDiv = document.getElementById('description');
const feelsLikeDiv = document.getElementById('feels-like');
const humidityDiv = document.getElementById('humidity');
const windDiv = document.getElementById('wind');
const updateButton = document.getElementById('updateButton');

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Weather data not available');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        cityDiv.textContent = error.message;
    }
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const feelsLike = data.main.feels_like;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const windDeg = data.wind.deg;
    const icon = data.weather[0].icon;

    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);

    cityDiv.textContent = `Weather in ${city}`;
    datetimeDiv.textContent = formattedDate;
    weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    temperatureDiv.textContent = `${temperature}°C`;
    descriptionDiv.textContent = weatherDescription;
    feelsLikeDiv.textContent = `Feels like: ${feelsLike}°C`;
    humidityDiv.textContent = `Humidity: ${humidity}%`;
    windDiv.textContent = `Wind: ${windSpeed} m/s, ${getWindDirection(windDeg)}`;
}

function getWindDirection(deg) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round((deg % 360) / 45) % 8;
    return directions[index];
}

updateButton.addEventListener('click', fetchWeather);

// Перший виклик для завантаження погоди при завантаженні сторінки
fetchWeather();





