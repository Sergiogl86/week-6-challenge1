import actionTypes from "./actionTypes";

export const leerTareasAction = (tareas) => ({
  type: actionTypes.leerTareas,
  tareas,
});

export const crearTareasAction = (tarea) => ({
  type: actionTypes.crearTarea,
  tarea,
});

export const borrarTareasAction = (tarea) => ({
  type: actionTypes.borrarTarea,
  tarea,
});

export const editarTareasAction = (tarea) => ({
  type: actionTypes.modificarTarea,
  tarea,
});

export const actualizarTareaAction = (tarea) => ({
  type: actionTypes.actualizarTarea,
  tarea,
});

export const limpiarTareaAction = () => ({
  type: actionTypes.limpiarTarea,
});
