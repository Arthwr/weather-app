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
      });
  };

  const handleTabClick = (e) => {
    view.makeTabActive(e);
  };

  const init = () => {
    view.searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleSearch();
    });
    view.tabElements.forEach((tab) => {
      tab.addEventListener("click", handleTabClick);
    });
  };

  return { init };
};
