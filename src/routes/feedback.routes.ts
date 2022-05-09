import express from "express";
import { NodemailerMailAdapter } from "../adapters/nodemailer/nodemail-mail-adapter";
import { PrismaFeedbacksRepository } from "../repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "../use-cases/submit-feedback-use-case";

const feedbackRoutes = express.Router();
feedbackRoutes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerAdapter
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});

export { feedbackRoutes };
