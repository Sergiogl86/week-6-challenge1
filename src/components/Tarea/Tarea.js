import useTareas from "./../../hooks/useTareas";

const Tarea = ({ tarea }) => {
  const { borrarTarea, mostrarTareaEditar } = useTareas();
  const actionBorrar = () => {
    borrarTarea(tarea);
  };

  const actionEditar = () => {
    mostrarTareaEditar(tarea);
  };

  return (
    <li>
      <h3>{tarea.tarea}</h3>
      <p>id {tarea.id}</p>
      <p>done {`${tarea.done}`}</p>
      <button onClick={actionEditar}>||Editar||</button>
      <button onClick={actionBorrar}>||Borrar||</button>
    </li>
  );
};

export default Tarea;
