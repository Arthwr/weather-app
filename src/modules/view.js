export const View = () => {
  const searchInput = document.querySelector("#search > input");
  const searchForm = document.querySelector("#search");

  // Loading bg
  const loader = document.querySelector(".loading-bg");

  // Front widget
  const frontWidget = document.querySelector("#front-widget");
  const frontIcon = document.querySelector(".weather-icon");

  // Tab widget
  const tabElements = document.querySelectorAll(".tab > div");

  // Main widget
  const mainWidget = document.querySelector("#main-widget");

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

  const mainWidgetElements = [
    { key: "tabCondition", selector: ".main-condition" },
    { key: "avghumidity", selector: ".main-humidity" },
    { key: "uv", selector: ".main-uv" },
    { key: "minTempC", selector: ".main-lowt" },
    { key: "maxTempC", selector: ".main-hight" },
  ];

  const toggleLoadingAnimation = () => {
    loader.classList.toggle("show");
  };

  const updateConditionIcon = (element, url) => {
    if (element) element.src = url;
  };

  const captureTabIndex = (e) => {
    const clickedTab = e.target.closest(".tab > div");
    if (!clickedTab) return;
    const index = clickedTab.getAttribute("data-index");
    return index;
  };

  const updateWidget = (elements, data, parent) => {
    elements.forEach(({ key, selector }) => {
      const element = parent.querySelector(selector);
      if (element) {
        element.textContent = data[key];
      }
    });
  };

  const activateFirstTab = () => {
    const firstTab = document.querySelector(".tab > div:first-child");
    if (firstTab) {
      firstTab.click();
    }
  };

  const makeTabActive = (e) => {
    const clickedTab = e.target.closest(".tab > div");
    if (!clickedTab) return;
    tabElements.forEach((tab) => tab.classList.remove("active"));
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

  const updateMainWidget = (data, widgetIndex) => {
    updateWidget(mainWidgetElements, data.forecast[widgetIndex], mainWidget);
  };

  const updateView = (data) => {
    updateFrontWidget(data);
    updateForecastWidget(data);
    activateFirstTab();
  };

  return {
    searchInput,
    searchForm,
    tabElements,
    updateView,
    makeTabActive,
    captureTabIndex,
    updateMainWidget,
    toggleLoadingAnimation,
  };
};
