export const Controller = (model, view) => {
  const handleSearch = () => {
    const query = view.searchInput.value;
    model
      .createWeatherData("forecastWeather", query)
      .then((weatherData) => {
        model.storeWeatherData(weatherData);
        view.updateView(weatherData);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  const handleTabClick = (e) => {
    view.makeTabActive(e);
    const index = view.captureTabIndex(e);
    const tabData = model.getStoredWeatherData();
    if (tabData) {
      view.updateMainWidget(tabData, index);
    }
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
