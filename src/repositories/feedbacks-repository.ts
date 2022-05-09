export interface CreateFeedbackData {
  type: string;
  comment: string;
  screenshot: string;
}

export interface FeedbacksRepository {
  create: (data: CreateFeedbackData) => Promise<void>;
}
