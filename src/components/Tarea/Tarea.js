const Tarea = ({ tarea }) => {
  return (
    <li>
      <div>
        {tarea.tarea} -- {`${tarea.done}`}
      </div>
    </li>
  );
};

export default Tarea;
