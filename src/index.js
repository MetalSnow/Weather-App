import './style.css';
import getWeatherData from './modules/getWeatherData';
import { locationInput, searchButton } from './modules/dom-module';
import { displayLoadingIcon } from './modules/displayLoading';

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  displayLoadingIcon();
  getWeatherData(locationInput.value);
});
