import actionTypes from "./actionTypes";

export const leerTareasAction = (tareas) => ({
  type: actionTypes.leerTareas,
  tareas,
});

export const crearTareasAction = (tarea) => ({
  type: actionTypes.crearTarea,
  tarea,
});
