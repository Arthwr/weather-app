export const Controller = (model, view) => {
  const handleSearch = () => {
    const query = view.searchInput.value;
    model
      .createWeatherData("forecastWeather", query)
      .then((weatherData) => {
        view.updateView(weatherData);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        view.showError(error);
      });
  };

  const init = () => {
    view.searchButton.addEventListener("click", handleSearch);
  };
  return { init };
};
