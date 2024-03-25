import { Schema } from 'mongoose';

export interface IQuestion {
  questionText: string;
  author: string;
  answer: string;
}

export const QuestionSchema = new Schema<IQuestion>({
  questionText: { type: String, required: true },
  author: { type: String, required: true },
  answer: { type: String, required: false },
});