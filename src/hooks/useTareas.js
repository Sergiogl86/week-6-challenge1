import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  crearTareasThunks,
  leerTareasThunks,
  borrarTareasThunks,
  editarTareasThunks,
} from "./../redux/thunks/thunks";

const useTareas = () => {
  const tareas = useSelector((store) => store.tareas);
  const dispatch = useDispatch();

  const leerTareas = useCallback(() => {
    dispatch(leerTareasThunks());
  }, [dispatch]);

  const crearTarea = (tarea) => {
    if (tarea.id === "") {
      debugger;
      dispatch(crearTareasThunks({ tarea: tarea.tarea, done: tarea.done }));
    } else {
      debugger;
      dispatch(editarTareasThunks({ ...tarea, id: +tarea.id }));
    }
  };

  const borrarTarea = (tarea) => {
    debugger;
    dispatch(borrarTareasThunks(tarea));
  };

  return {
    tareas,
    leerTareas,
    crearTarea,
    borrarTarea,
  };
};

export default useTareas;
