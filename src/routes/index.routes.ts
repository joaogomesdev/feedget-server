import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "../prima";
import { feedbackRoutes } from "./feedback.routes";

const routes = express.Router();

routes.use(feedbackRoutes);

export { routes };
