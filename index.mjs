import express from "express";
import routes from "./routes/routes.mjs";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);
app.listen(port, () => console.log(`Running on http://localhost:${port}`));
