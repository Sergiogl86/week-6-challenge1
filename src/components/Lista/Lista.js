import { useEffect } from "react";
import Tarea from "../Tarea/Tarea";
import useTareas from "./../../hooks/useTareas";

const Lista = () => {
  const { tareas, leerTareas } = useTareas();

  useEffect(() => {
    leerTareas();
  }, [leerTareas]);

  /* let tareas = [
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
  ]; */

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
