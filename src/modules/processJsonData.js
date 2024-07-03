export default async function processDataJSON(response) {
  const data = await response.json();

  const weatherData = {
    location: data.location.name,
    weatherCondition: data.current.condition.text,
    temperature: data.current.temp_c,
    feelsLike: data.current.feelslike_c,
    humidity: data.current.humidity,
    cloud: data.current.cloud,
    precip_mm: data.current.precip_mm,
  };

  return weatherData;
}
