import { Model as createModel } from "./modules/model";
import { View as createView } from "./modules/view";
import { Controller as createController } from "./modules/controller";
import { Storage as createStorage } from "./modules/storage";

const model = createModel();
const view = createView();
const controller = createController();
const storage = createStorage();

const createWeatherApp = (model, view, controller, storage) => {
  console.log("%cApp is running", "color: green;");
  return { model, view, controller, storage };
};
const weatherApp = createWeatherApp(model, view, controller, storage);

weatherApp.model.createWeatherData("forecastWeather", "Astana");
