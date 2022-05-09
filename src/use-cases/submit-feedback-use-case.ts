import { FeedbacksRepository } from "../repositories/feedbacks-repository";
import { PrismaFeedbacksRepository } from "../repositories/prisma/prisma-feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot: string;
}
export class SubmitFeedbackUseCase {
  constructor(private feedbacksRepository: FeedbacksRepository) {}
  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;
    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });
  }
}
