import { Model as createModel } from "./modules/model";
import { View as createView } from "./modules/view";
import { Controller as createController } from "./modules/controller";
import "./styles/app.css"

const model = createModel();
const view = createView();
const controller = createController();

const createWeatherApp = (model, view, controller) => {
  return { model, view, controller };
};
const weatherApp = createWeatherApp(model, view, controller);

// weatherApp.model.createWeatherData("forecastWeather", "Almaty");
