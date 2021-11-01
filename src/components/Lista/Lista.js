import Tarea from "../Tarea/Tarea";

const Lista = () => {
  let tareas = [
    {
      id: 1,
      tarea: "coser",
      done: false,
    },
    {
      id: 2,
      tarea: "leer",
      done: false,
    },
    {
      id: 3,
      tarea: "barrer",
      done: false,
    },
  ];

  return (
    <>
      <ul>
        {tareas.map((tarea) => (
          <Tarea tarea={tarea} key={tarea.id} />
        ))}
      </ul>
    </>
  );
};

export default Lista;
