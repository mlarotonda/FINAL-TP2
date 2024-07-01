import { Router } from "express";
import SondaController from "../controller/sondaController.js";

const sondaRoutes = Router();

sondaRoutes.post("/", SondaController.createSonda);
sondaRoutes.get("/", SondaController.getSondas);
sondaRoutes.get("/:id", SondaController.getSondasById);

export default sondaRoutes;
