import useTareas from "./../../hooks/useTareas";

const Tarea = ({ tarea }) => {
  const { borrarTarea } = useTareas();
  const actionBorrar = () => {
    borrarTarea(tarea);
  };

  const actionEditar = () => {};

  return (
    <li>
      <div>
        id {tarea.id} -- tarea {tarea.tarea} -- done {`${tarea.done}`}
      </div>
      <button onClick={actionEditar}>||Editar||</button>
      <button onClick={actionBorrar}>||Borrar||</button>
    </li>
  );
};

export default Tarea;
