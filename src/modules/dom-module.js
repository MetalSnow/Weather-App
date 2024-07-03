import generateGif from './generateGifWeather';
import sunnyIcon from '../icons/sun.png';
import rainingIcon from '../icons/raining.png';
import cloudyIcon from '../icons/cloudy.png';

export { searchButton, locationInput, displayWeatherData };

const searchButton = document.querySelector('#search-btn');
const locationInput = document.querySelector('#locationInput');
const weatherContainer = document.querySelector('.weather-container');

async function displayWeatherData(data) {
  //remove container content
  while (weatherContainer.firstChild) {
    weatherContainer.removeChild(weatherContainer.firstChild);
  }

  const locationName = document.createElement('h3');
  const condition = document.createElement('p');
  const temperature = document.createElement('p');
  const feelsLike = document.createElement('p');
  const humidity = document.createElement('p');
  const conditionIcon = document.createElement('img');

  if (data.precip_mm > 0) {
    conditionIcon.src = rainingIcon;
  } else {
    if (data.cloud === 0) {
      conditionIcon.src = sunnyIcon;
    } else if (data.cloud > 0) {
      conditionIcon.src = cloudyIcon;
    }
  }

  locationName.textContent = `City: ${data.location}`;
  condition.textContent = data.weatherCondition;
  temperature.textContent = `Temperature: ${data.temperature}°C`;
  feelsLike.textContent = `Feels Like: ${data.feelsLike}°C`;
  humidity.textContent = `Humidity: ${data.humidity}%`;

  const img = document.querySelector('.gif-weather');
  const gifUrl = await generateGif(data.weatherCondition);
  img.src = gifUrl;

  condition.appendChild(conditionIcon);

  weatherContainer.append(
    locationName,
    condition,
    temperature,
    feelsLike,
    humidity
  );
}
