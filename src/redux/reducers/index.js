import { combineReducers } from "redux";
import currentTarea from "./currentTarea";
import tareasReducer from "./tareasReducer";

const rootReducer = combineReducers({
  tareas: tareasReducer,
  currentTarea: currentTarea,
});

export default rootReducer;
