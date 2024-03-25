import express from 'express';
import z from 'zod';
import { createQuestion } from '../lib/questions';
import { Question } from '../models';
import { requireAuth } from '../middlewares/require-auth';


const QRouter = express.Router();

const addQSchema = z.object({
  questionText: z.string(),
});

const answerQSchema = z.object({
    _id: z.string(),
    answer: z.string(),
  });

QRouter.post('/add', requireAuth, async (req, res) => {
  const zodResult = addQSchema.safeParse(req.body);
  if (!zodResult.success) {
    res.status(400).send('Invalid input!');
    return;
  }

  const { questionText } = zodResult.data;
  await createQuestion(questionText, req.session!.user);

  res.status(200).send('OK!');
});

QRouter.post('/answer', requireAuth, async (req, res) => {
    const zodResult = answerQSchema.safeParse(req.body);
    if (!zodResult.success) {
      res.status(400).send('Invalid input!');
      return;
    }
  
    const { _id, answer } = zodResult.data;
    const question = await Question.findOne({ _id });
    if (question) {
        question.answer = answer;
        await question.save();
        res.status(200).send('Answered question successfully!');
    } else {
        res.status(400).send('Question does not exist!');
    }
  });

QRouter.get('', async (_req, res) => {
    const questions = await Question.find();
    res.status(200).json(questions);
});

export default QRouter;