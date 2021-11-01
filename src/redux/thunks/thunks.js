import {
  crearTareasAction,
  leerTareasAction,
} from "./../actions/actionCreator";

export const leerTareasThunks = () => async (dispatch) => {
  const response = await fetch(
    "https://week-6-challenge-1.herokuapp.com/week6"
  );
  const tareas = await response.json();

  dispatch(leerTareasAction(tareas));
};

export const crearTareasThunks = (tarea) => async (dispatch) => {
  debugger;
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
  const tareas = await response.json();

  dispatch(crearTareasAction(tareas));
};
