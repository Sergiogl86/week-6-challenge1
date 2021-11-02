import { leerTareasAction } from "./../actions/actionCreator";
import tareasReducer from "./tareasReducer";
describe("Given a tareasReducer reducer", () => {
  describe("When it receives an empty tareas list and a leer Tareas Action with three tareas", () => {
    test("Then it should return a new tareas list with the three tareas received", () => {
      const tareasInciales = [];
      const listadoTareas = [
        {
          id: 1,
          tarea: "barrer",
          done: "false",
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
      const action = leerTareasAction(listadoTareas);

      const nuevoListado = tareasReducer(tareasInciales, action);

      expect(nuevoListado).toEqual(listadoTareas);
    });
  });
});
