export const View = () => {
  const searchInput = document.querySelector("#search > input");
  const searchForm = document.querySelector("#search");

  // Front widget
  const frontWidget = document.querySelector("#front-widget");
  const frontIcon = document.querySelector(".weather-icon");

  // Tab widget
  const tabElements = document.querySelectorAll(".tab");
  const tabButtons = document.querySelectorAll(".tab > div");

  const frontWidgetElements = [
    { key: "country", selector: ".country" },
    { key: "cityRegion", selector: ".city-region" },
    { key: "date", selector: ".date" },
    { key: "dayTime", selector: ".day-time" },
    { key: "condition", selector: ".condition" },
    { key: "tempC", selector: ".temp-current" },
    { key: "airQ", selector: ".air-quality" },
    { key: "icon", selector: ".weather-icon" },
  ];

  const forecastWidgetElements = [
    { key: "tabDate", selector: ".date" },
    { key: "tabDay", selector: ".day" },
    { key: "tabTemp", selector: ".temperature" },
  ];

  const updateConditionIcon = (element, url) => {
    if (element) element.src = url;
  };

  const updateWidget = (elements, data, parent) => {
    elements.forEach(({ key, selector }) => {
      const element = parent.querySelector(selector);
      if (element) {
        element.textContent = data[key];
      }
    });
  };

  const makeTabActive = (e) => {
    const clickedTab = e.target.closest(".tab > div");
    if (!clickedTab) return;
    tabButtons.forEach((tab) => {
      tab.classList.remove("active");
    });
    clickedTab.classList.add("active");
  };

  const updateFrontWidget = (data) => {
    updateWidget(frontWidgetElements, data, frontWidget);
    updateConditionIcon(frontIcon, data.conditionIcon);
  };

  const updateForecastWidget = (data) => {
    tabElements.forEach((tab, index) => {
      updateWidget(forecastWidgetElements, data.forecast[index], tab);
      const icon = tab.querySelector(".weather-icon img");
      updateConditionIcon(icon, data.forecast[index].tabConditionIcon);
    });
  };

  const updateView = (data) => {
    updateFrontWidget(data);
    updateForecastWidget(data);
  };

  return { searchInput, searchForm, tabElements, updateView, makeTabActive };
};
