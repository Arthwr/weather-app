export const Model = () => {
  let storage;

  const KEY = "71242ef4ffcb4134949162751242604";
  const FORECAST_DAYS = 3;
  const API_METHODS = {
    forecastWeather: "/forecast.json",
  };

  const setStorage = (newStorage) => {
    storage = newStorage;
  };

  const fetchWeatherData = async (method, query) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/${API_METHODS[method]}?key=${KEY}&q=${query}&days=${FORECAST_DAYS}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Failed to fetch weather data: ", error);
    }
  };

  const createWeatherData = async (method, query) => {
    const data = await fetchWeatherData(method, query);
    const forecastArray = data.forecast.forecastday.map(
      (forecastDay, index) => ({
        day: `Day ${index + 1}`,
        forecast: {
          date: forecastDay.date,
          condition: forecastDay.day.condition.text,
          maxTempC: forecastDay.day.maxtemp_c,
          minTempC: forecastDay.day.mintemp_c,
          maxTempF: forecastDay.day.maxtemp_f,
          minTempF: forecastDay.day.mintemp_f,
          averageC: forecastDay.day.avgtemp_c,
          averageF: forecastDay.day.avgtemp_f,
          uv: forecastDay.day.uv,
        },
      })
    );

    const weatherData = {
      country: data.location.country,
      region: data.location.region,
      city: data.location.name,
      time: data.location.localtime,
      forecast: forecastArray,
    };
    console.log(weatherData);
    return weatherData;
  };

  return { setStorage, createWeatherData };
};
