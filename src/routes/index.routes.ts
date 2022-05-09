import express from "express";
import { feedbackRoutes } from "./feedback.routes";

const routes = express.Router();

routes.use(feedbackRoutes);

export { routes };
