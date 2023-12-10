import { Router } from "express";
import ClienteController from "../controllers/ClienteController";

const routes = Router();

routes.use("/clientes", ClienteController)

export {routes};