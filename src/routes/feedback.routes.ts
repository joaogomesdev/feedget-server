import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "../prima";
import { PrismaFeedbacksRepository } from "../repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "../use-cases/submit-feedback-use-case";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4f1800cd67de7c",
    pass: "9ba6ae4749ed45",
  },
});

const feedbackRoutes = express.Router();
feedbackRoutes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  // await transport.sendMail({
  //   from: "Team Feedget <hello@feedget.com>",
  //   to: "João Gomes joaopfg.2002@gmail.com",
  //   subject: "New feedback",
  //   html: [
  //     `<div style="font-family: sans-serif; font-size: 16px; color: #111;n " >`,
  //     `<p>Tipo do feedback: ${type}</p>`,
  //     `<p>Comment: ${comment}</p>`,
  //     `</div>`,
  //   ].join("\n"),
  // });

  return res.status(201).send();
});

export { feedbackRoutes };
