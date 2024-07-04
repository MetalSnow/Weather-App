import generateGif from './generateGifWeather';
import sunnyIcon from '../icons/sun.png';
import rainingIcon from '../icons/raining.png';
import cloudyIcon from '../icons/cloudy.png';

export { searchButton, locationInput, displayWeatherData, gifLoading, main };

const main = document.querySelector('main');
const searchButton = document.querySelector('#search-btn');
const locationInput = document.querySelector('#locationInput');
const weatherContainer = document.createElement('div');
const gifLoading = document.createElement('img');

weatherContainer.classList.add('weather-container');

async function displayWeatherData(data) {
  //remove container content
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  while (weatherContainer.firstChild) {
    weatherContainer.removeChild(weatherContainer.firstChild);
  }

  const locationName = document.createElement('h3');
  const condition = document.createElement('p');
  const temperature = document.createElement('p');
  const feelsLike = document.createElement('p');
  const humidity = document.createElement('p');
  const wind = document.createElement('p');
  const conditionIcon = document.createElement('img');

  if (data.precip_mm > 0) {
    conditionIcon.src = rainingIcon;
    weatherContainer.style.backgroundColor = '#374151';
  } else {
    if (data.cloud === 0) {
      conditionIcon.src = sunnyIcon;
      weatherContainer.style.backgroundColor = '#a8861a';
    } else if (data.cloud > 0) {
      conditionIcon.src = cloudyIcon;
      weatherContainer.style.backgroundColor = '#52525b';
    }
  }

  locationName.textContent = `City: ${data.location}`;
  condition.textContent = data.weatherCondition;
  temperature.textContent = `Temperature: ${data.temperatureC}°C (${data.temperatureF}°F)`;
  feelsLike.textContent = `Feels Like: ${data.feelsLikeC}°C (${data.feelsLikeF}°F)`;
  humidity.textContent = `Humidity: ${data.humidity}%`;
  wind.textContent = `Wind: ${data.wind}km/h`;

  const img = document.createElement('img');
  const gifUrl = await generateGif(data.weatherCondition);

  img.className = 'gif-weather';
  img.src = gifUrl;

  weatherContainer.classList.add('active');

  condition.insertBefore(conditionIcon, condition.firstChild);

  weatherContainer.append(
    locationName,
    condition,
    temperature,
    feelsLike,
    humidity,
    wind
  );
  main.append(weatherContainer, img);
}
