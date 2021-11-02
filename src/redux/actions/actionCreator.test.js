import { leerTareasAction } from "./actionCreator";
import actionTypes from "./actionTypes";

describe("Given a leer Tareas Action", () => {
  describe("When it receives a list of tareas", () => {
    test("Then it should return a leer Tareas Action with the challenges received", () => {
      const listaTareas = [
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

      const accionEsperada = {
        type: actionTypes.leerTareas,
        tareas: listaTareas,
      };

      const actionCrearListado = leerTareasAction(listaTareas);

      expect(actionCrearListado).toEqual(accionEsperada);
    });
  });
});
