export default async function processDataJSON(response) {
  const data = await response.json();

  console.log(data);

  const weatherData = {
    location: data.location.name,
    weatherCondition: data.current.condition.text,
    temperatureC: data.current.temp_c,
    temperatureF: data.current.temp_f,
    feelsLikeC: data.current.feelslike_c,
    feelsLikeF: data.current.feelslike_f,
    humidity: data.current.humidity,
    wind: data.current.wind_kph,
    cloud: data.current.cloud,
    precip_mm: data.current.precip_mm,
  };

  return weatherData;
}
