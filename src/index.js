import { Model as createModel } from "./modules/model";
import { View as createView } from "./modules/view";
import { Controller as createController } from "./modules/controller";
import "./styles/app.css";

const modelInstance = createModel();
const viewInstance = createView();
const controllerInstance = createController(modelInstance, viewInstance);

const createWeatherApp = (controller) => {
  controller.init();
};
createWeatherApp(controllerInstance);
