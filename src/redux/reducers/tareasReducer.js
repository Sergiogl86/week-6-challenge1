import actionTypes from "./../actions/actionTypes";

const tareasReducer = (tareas = [], action) => {
  let newTareas;
  debugger;
  switch (action.type) {
    case actionTypes.leerTareas:
      newTareas = [...action.tareas];
      break;
    case actionTypes.crearTarea:
      newTareas = [...tareas, action.tarea];
      break;
    default:
      newTareas = tareas;
  }

  return newTareas;
};
export default tareasReducer;
