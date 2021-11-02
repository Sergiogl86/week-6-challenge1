import Tarea from "./Tarea";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "./../../utils/test-utils";

describe("Given a Tarea component", () => {
  describe("When it receives a Tarea", () => {
    test("Then it should render the Tarea, the done and a delete button", () => {
      const tarea = {
        id: 1,
        tarea: "barrer",
        done: "false",
      };

      renderWithProviders(<Tarea tarea={tarea} />);

      screen.debug();

      const nameTarea = screen.getByRole("heading", { name: tarea.tarea });
      const isDone = screen.getByText("done " + tarea.done);
      const borrar = screen.getByRole("button", { name: /borrar/i });

      expect(nameTarea).toBeInTheDocument();
      expect(isDone).toBeInTheDocument();
      expect(borrar).toBeInTheDocument();
    });
  });
});
