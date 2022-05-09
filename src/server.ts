import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prima";
import { routes } from "./routes/index.routes";

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3333, () => {
  console.log("Server running on port 3333");
});
