import { rest } from "msw";

const urlApi = process.env.REACT_APP_API_URL;

const tareasDefecto = [
  {
    id: 1,
    tarea: "barrer",
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

const handlers = [
  rest.get(urlApi, (req, res, ctx) => {
    return res(ctx.json(tareasDefecto));
  }),
];

export default handlers;
