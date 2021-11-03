import useTareas from "./../../hooks/useTareas";
import { useState, useEffect } from "react";

const Tarea = ({ tarea }) => {
  const { borrarTarea, mostrarTareaEditar, crearTarea } = useTareas();
  const actionBorrar = () => {
    borrarTarea(tarea);
  };

  const [tareaHecha, setTareaHecha] = useState(tarea.done);

  useEffect(() => {
    setTareaHecha(tarea.done);
  }, [tarea.done]);

  const actionEditar = () => {
    mostrarTareaEditar(tarea);
  };

  const realizarTarea = (event) => {
    setTareaHecha(event.target.checked);
    crearTarea({ ...tarea, done: event.target.checked });
  };

  return (
    <li>
      <h3>{tarea.tarea}</h3>
      <p>id {tarea.id}</p>
      <label>
        <input type="checkbox" checked={tareaHecha} onChange={realizarTarea} />
        Done
      </label>
      <p>done {`${tarea.done}`}</p>
      <button onClick={actionEditar}>||Editar||</button>
      <button onClick={actionBorrar}>||Borrar||</button>
    </li>
  );
};

export default Tarea;
