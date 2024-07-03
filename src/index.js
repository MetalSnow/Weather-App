import './style.css';
import getWeatherData from './modules/getWeatherData';
import { locationInput, searchButton } from './modules/dom-module';

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  getWeatherData(locationInput.value);
});
