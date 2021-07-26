import {
  listAll,
  listSingle,
  deleteSingle,
  updateSingle,
  createSingle,
} from "../controllers/controllers.mjs";

const routes = (app) => {
  //
  app.route("/").get((req, res) => {
    res.send("running");
  });
  app.route("/users").get(listAll);
  //SE PRECISO, EM VEZ DE USAR OS MÉTODOS APENAS NOS CONTROLLERS, É POSSÍVEL USAR AQUI TB.
  //UM EXEMPLO SERIA ENFILEIRAR OUTRO MÉTODO NA MESMA PÁGINA COM O NEXT, como feito abaixo.

  app
    .route("/users/:id")
    .get((req, res, next) => {
      next();
    }, listSingle)
    .put((req, res, next) => {
      next();
    }, updateSingle)
    .delete(deleteSingle);

  app.route("/register").post(createSingle);
};

export default routes;
