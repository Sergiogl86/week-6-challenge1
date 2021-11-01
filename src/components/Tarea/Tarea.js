import useTareas from "./../../hooks/useTareas";

const Tarea = ({ tarea }) => {
  const { borrarTarea } = useTareas();
  const actionBorrar = () => {
    borrarTarea(tarea);
  };

  return (
    <li>
      <div>
        {tarea.tarea} -- {`${tarea.done}`}
      </div>
      <button>||Editar||</button>
      <button onClick={actionBorrar}>||Borrar||</button>
    </li>
  );
};

export default Tarea;
