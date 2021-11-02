import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actualizarTareaAction,
  limpiarTareaAction,
} from "../redux/actions/actionCreator";
import {
  crearTareasThunks,
  leerTareasThunks,
  borrarTareasThunks,
  editarTareasThunks,
} from "./../redux/thunks/thunks";

const useTareas = () => {
  const tareas = useSelector((store) => store.tareas);
  const currentTarea = useSelector((store) => store.currentTarea);
  const dispatch = useDispatch();

  const leerTareas = useCallback(() => {
    dispatch(leerTareasThunks());
  }, [dispatch]);

  const crearTarea = (tarea) => {
    if (tarea.id === "") {
      dispatch(crearTareasThunks({ tarea: tarea.tarea, done: tarea.done }));
    } else {
      dispatch(editarTareasThunks({ ...tarea, id: +tarea.id }));
    }
  };

  const borrarTarea = (tarea) => {
    dispatch(borrarTareasThunks(tarea));
  };

  const mostrarTareaEditar = (tarea) => {
    dispatch(actualizarTareaAction(tarea));
  };

  const limpiarTareaEditar = () => {
    dispatch(limpiarTareaAction());
  };

  return {
    tareas,
    leerTareas,
    crearTarea,
    borrarTarea,
    currentTarea,
    mostrarTareaEditar,
    limpiarTareaEditar,
  };
};

export default useTareas;
