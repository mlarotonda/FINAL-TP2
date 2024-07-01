import { Router } from "express";
import sondaRoutes from "./sondaRoutes.js";

const router = Router();

router.use("/sonda", sondaRoutes);

export default router;
