import { useState } from "react";
import useTareas from "./../../hooks/useTareas";

const Formulario = () => {
  const { crearTarea } = useTareas();
  const inicialCambiarTarea = {
    tarea: "",
    done: false,
  };

  const [cambiarTarea, SetCambiarTarea] = useState(inicialCambiarTarea);

  const changeTarea = (event) => {
    SetCambiarTarea({
      ...cambiarTarea,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <form
        className="form-create"
        autoComplete="off"
        onSubmit={(event) => {
          event.preventDefault();
          crearTarea(cambiarTarea);
        }}
      >
        <div className="form-group">
          <label htmlFor="tarea">Nombre tarea:</label>
          <input
            type="text"
            id="tarea"
            value={cambiarTarea.tarea}
            onChange={changeTarea}
          />
        </div>
        <div>
          <label htmlFor="done">Tarea Realizada:</label>
          <input
            type="text"
            id="done"
            value={cambiarTarea.done}
            onChange={changeTarea}
          />
        </div>
        <div className="button-container">
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
