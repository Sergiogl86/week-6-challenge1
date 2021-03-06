import actionTypes from "./../actions/actionTypes";

const tareasReducer = (tareas = [], action) => {
  let newTareas;

  switch (action.type) {
    case actionTypes.leerTareas:
      newTareas = [...action.tareas];
      break;
    case actionTypes.crearTarea:
      newTareas = [...tareas, action.tarea];
      break;
    case actionTypes.borrarTarea:
      newTareas = tareas.filter((tarea) => tarea.id !== action.tarea.id);
      break;
    case actionTypes.modificarTarea:
      newTareas = tareas.map((tarea) => {
        if (tarea.id === action.tarea.id) {
          return action.tarea;
        } else {
          return tarea;
        }
      });
      break;
    default:
      newTareas = tareas;
  }

  return newTareas;
};
export default tareasReducer;
