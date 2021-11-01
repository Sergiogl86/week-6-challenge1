import {
  crearTareasAction,
  leerTareasAction,
  borrarTareasAction,
  editarTareasAction,
} from "./../actions/actionCreator";

export const leerTareasThunks = () => async (dispatch) => {
  const response = await fetch(
    "https://week-6-challenge-1.herokuapp.com/week6"
  );
  const tareas = await response.json();

  dispatch(leerTareasAction(tareas));
};

export const crearTareasThunks = (tarea) => async (dispatch) => {
  const data = {
    method: "POST",
    body: JSON.stringify(tarea),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(
    `https://week-6-challenge-1.herokuapp.com/week6/`,
    data
  );
  tarea = await response.json();

  dispatch(crearTareasAction(tarea));
};

export const borrarTareasThunks = (tarea) => async (dispatch) => {
  const data = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  await fetch(
    `https://week-6-challenge-1.herokuapp.com/week6/${tarea.id}`,
    data
  );

  dispatch(borrarTareasAction(tarea));
};

export const editarTareasThunks = (tarea) => async (dispatch) => {
  const data = {
    method: "PUT",
    body: JSON.stringify(tarea),
    headers: {
      "Content-Type": "application/json",
    },
  };
  await fetch(
    `https://week-6-challenge-1.herokuapp.com/week6/${tarea.id}`,
    data
  );

  dispatch(editarTareasAction(tarea));
};
