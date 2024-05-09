export const Controller = (model, view) => {
  const handleSearch = (query) => {
    query = query || view.searchInput.value;
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

  const getUserLocation = async () => {
    if (!navigator.geolocation) {
      throw new Error("Geolocation is not supported by this browser");
    }

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = `${position.coords.latitude},${position.coords.longitude}`;
          resolve(userLocation);
        },
        (error) => {
          reject(error.message);
        }
      );
    });
  };

  const getUserWeatherForecast = async () => {
    try {
      const userLocation = await getUserLocation();
      handleSearch(userLocation);
    } catch (error) {
      console.log(error);
    }
  };

  const init = async () => {
    await getUserWeatherForecast();
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
