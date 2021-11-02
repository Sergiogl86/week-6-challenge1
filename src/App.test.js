import userEvent from "@testing-library/user-event";
import server from "./mocks/server";
import renderWithProviders from "./utils/test-utils";
import App from "./App";
import {
  screen,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";

beforeAll(() => {
  server.listen();
});
beforeEach(() => {
  renderWithProviders(<App />);
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

describe("Dado el componente App", () => {
  describe("Cuando el usuario borra una tarea", () => {
    test("Espero que en la pagina desaparezca la tarea", async () => {
      const tareas = await screen.findAllByRole("listitem");
      screen.debug();
      const text = within(tareas[1]).getByRole("heading");
      const deleteButton = within(tareas[1]).getByRole("button", {
        name: /borrar/i,
      });

      userEvent.click(deleteButton);

      await waitForElementToBeRemoved(() => screen.getByText(text.textContent));
      expect(tareas[1]).not.toBeInTheDocument();
    });
  });
});
