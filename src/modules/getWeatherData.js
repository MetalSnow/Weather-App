import { displayWeatherData } from './dom-module';
import processDataJSON from './processJsonData';

export default async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=50a4dd9ae6634d29ac964023243006&q=${location}`,
      { mode: 'cors' }
    );

    if (!response.ok) {
      throw new Error(`Status: ${response.status} Location Not Found!`);
    }

    const processData = await processDataJSON(response);
    console.log(processData);
    displayWeatherData(processData);
  } catch (error) {
    console.log(error);
  }
}
