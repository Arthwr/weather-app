export const View = () => {
  const searchInput = document.querySelector("#search > input");
  const searchForm = document.querySelector("#search");

  // Front widget
  const country = document.querySelector(".country");
  const cityRegion = document.querySelector(".city-region");
  const date = document.querySelector(".date");
  const dayTime = document.querySelector(".day-time");
  const condition = document.querySelector(".condition");
  const tempC = document.querySelector(".temp-current");
  const airQ = document.querySelector(".air-quality");

  const frontWidgetMap = {
    country,
    cityRegion,
    date,
    dayTime,
  };

  const currentWeatherMap = {
    condition,
    tempC,
    airQ,
  };

  const updateCurrentWeather = (data) => {
    Object.keys(currentWeatherMap).forEach((key) => {
      currentWeatherMap[key].textContent = data.current[key];
    });
  };

  const updateFrontWidget = (data) => {
    Object.keys(frontWidgetMap).forEach((key) => {
      frontWidgetMap[key].textContent = data[key];
    });
    updateCurrentWeather(data);
  };

  const updateView = (data) => {
    updateFrontWidget(data);
  };

  return { searchInput, searchForm, updateView };
};
