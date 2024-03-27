import express from 'express';
import z from 'zod';
import { createQuestion } from '../lib/questions';
import { requireAuth } from '../middlewares/require-auth';
import { Question } from '../models';
import { throw400Error, throw500Error } from './error-functions';


const QRouter = express.Router();

const addQSchema = z.object({
  questionText: z.string(),
});

const answerQSchema = z.object({
    _id: z.string(),
    answer: z.string(),
  });

QRouter.post('/add', requireAuth, async (req, res, next) => {
  const zodResult = addQSchema.safeParse(req.body);
  if (!zodResult.success) {
    throw400Error('Invalid input!', req, res, next);
    return;
  }

  try {
    const { questionText } = zodResult.data;
    await createQuestion(questionText, req.session!.user);

    res.status(200).send('OK!');
  } catch (err) {
      throw500Error(req, res, next);
  }
});

QRouter.post('/answer', requireAuth, async (req, res, next) => {
    const zodResult = answerQSchema.safeParse(req.body);
    if (!zodResult.success) {
      throw400Error('Invalid input!', req, res, next);
      return;
    }

    try {
      const { _id, answer } = zodResult.data;
      const question = await Question.findOne({ _id });
      if (question) {
          question.answer = answer;
          await question.save();
          res.status(200).send('Answered question successfully!');
      } else {
          throw400Error('Question does not exist!', req, res, next);
      }
    } catch(err) {
        throw500Error(req, res, next);
    }
  });

QRouter.get('', async (req, res, next) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (err) {
      throw500Error(req, res, next);
  }
});

export default QRouter;