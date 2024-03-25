import { Question } from '../models';

export async function createQuestion(questionText: string, author: string) {

  const newQuestion = new Question({
    questionText,
    author,
  });

  await newQuestion.save();
}