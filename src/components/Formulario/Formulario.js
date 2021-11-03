import { useEffect, useState } from "react";
import useTareas from "./../../hooks/useTareas";

const Formulario = () => {
  const { crearTarea, currentTarea, limpiarTareaEditar } = useTareas();
  const inicialCambiarTarea = {
    id: "",
    tarea: "",
    done: "",
  };

  const [cambiarTarea, SetCambiarTarea] = useState(inicialCambiarTarea);

  useEffect(() => {
    if (currentTarea.id !== "") {
      SetCambiarTarea(currentTarea);
    }
  }, [currentTarea]);

  const changeTarea = (event) => {
    SetCambiarTarea({
      ...cambiarTarea,
      [event.target.id]: event.target.value,
    });
  };

  const formOnsutmit = (event) => {
    event.preventDefault();
    crearTarea(cambiarTarea);
    SetCambiarTarea({
      id: "",
      tarea: "",
      done: "",
    });
    limpiarTareaEditar();
  };

  const limpiarForm = () => {
    SetCambiarTarea({
      id: "",
      tarea: "",
      done: "",
    });
    limpiarTareaEditar();
  };

  return (
    <>
      <form className="form-create" autoComplete="off" onSubmit={formOnsutmit}>
        {/* <div className="form-group">
          <label htmlFor="id">id tarea:</label>
          <input
            type="number"
            id="id"
            value={cambiarTarea.id}
            onChange={changeTarea}
          />
        </div> */}
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
          <label>
            <input
              type="checkbox"
              checked={cambiarTarea.done}
              onChange={changeTarea}
            />
            Done
          </label>
        </div>

        <div className="button-container">
          <button type="submit">
            {cambiarTarea.id !== "" ? "Modificar" : "Crear"}
          </button>
        </div>
      </form>
      <div className="button-container">
        <button onClick={limpiarForm}>Limpiar</button>
      </div>
    </>
  );
};

export default Formulario;
