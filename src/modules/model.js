const KEY = "71242ef4ffcb4134949162751242604";
const FORECAST_DAYS = 3;
const AIR_QUALITY = "yes";
const API_METHODS = {
  forecastWeather: "/forecast.json",
};

export const Model = () => {
  const fetchWeatherData = async (method, query) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/${API_METHODS[method]}?key=${KEY}&q=${query}&days=${FORECAST_DAYS}&aqi=${AIR_QUALITY}`
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

  const transformWeatherData = (data) => {
    const { current, location, forecast } = data;

    const currentWeather = {
      condition: current.condition,
      tempC: current.feelslike_c,
      tempF: current.feelslike_f,
      airQ: current.air_quality["us-epa-index"],
      humidity: current.humidity,
      uv: current.uv,
    };

    const forecastArray = forecast.forecastday.map((forecastDay, index) => ({
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
    }));

    return {
      country: location.country,
      region: location.region,
      city: location.name,
      time: location.localtime,
      current: currentWeather,
      forecast: forecastArray,
    };
  };

  const createWeatherData = async (method, query) => {
    const data = await fetchWeatherData(method, query);
    const weatherData = transformWeatherData(data);
    console.log(weatherData);
    return weatherData;
  };

  return { createWeatherData };
};
