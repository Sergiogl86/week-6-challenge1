import actionTypes from "./../actions/actionTypes";

const currentTarea = (
  tarea = {
    id: "",
    tarea: "",
    done: "",
  },
  action
) => {
  let newTarea;

  switch (action.type) {
    case actionTypes.actualizarTarea:
      newTarea = { ...action.tarea };
      break;
    case actionTypes.limpiarTarea:
      newTarea = {
        id: "",
        tarea: "",
        done: "",
      };
      break;

    default:
      newTarea = tarea;
  }

  return newTarea;
};
export default currentTarea;
