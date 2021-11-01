import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  crearTareasThunks,
  leerTareasThunks,
  borrarTareasThunks,
} from "./../redux/thunks/thunks";

const useTareas = () => {
  const tareas = useSelector((store) => store.tareas);
  const dispatch = useDispatch();

  const leerTareas = useCallback(() => {
    dispatch(leerTareasThunks());
  }, [dispatch]);

  const crearTarea = (tarea) => {
    debugger;
    dispatch(crearTareasThunks(tarea));
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
