export const View = () => {
  const searchInput = document.querySelector("#search > input");
  const searchButton = document.querySelector("#search > button");

  // Front widget
  const country = document.querySelector("#front-widget > .country");
  const cityRegion = document.querySelector("#front-widget > .city-region");
  const date = document.querySelector("#front-widget > .date");
  const dayTime = document.querySelector("#front-widget > .dayTime");

  const frontWidgetMap = {
    country,
    cityRegion,
    date,
    dayTime,
  };

  const updateFrontWidget = (data) => {
    Object.keys(frontWidgetMap).forEach((key) => {
      frontWidgetMap[key].textContent = data[key];
    });
  };

  const updateView = (data) => {
    updateFrontWidget(data);
  };

  return { searchInput, searchButton, updateView };
};
