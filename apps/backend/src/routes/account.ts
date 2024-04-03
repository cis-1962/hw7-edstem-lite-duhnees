import bcrypt from 'bcrypt';
import express from 'express';
import z from 'zod';
import { createUser } from '../lib/account';
import { requireAuth } from '../middlewares/require-auth';
import { User } from '../models';
import { throw400Error, throw500Error } from './error-functions';


const AuthRouter = express.Router();

const signupSchema = z.object({
  username: z.string(),
  password: z.string(),
});

AuthRouter.post('/signup', async (req, res, next) => {
  const zodResult = signupSchema.safeParse(req.body);
  if (!zodResult.success) {
    throw400Error('Invalid input!', req, res, next);
    return;
  }

  try {
    const { username, password } = zodResult.data;
    const user = await User.findOne({ username });
    if (user) {
      throw400Error('User already exists!', req, res, next);
      return;
    }
    await createUser(username, password);

    req.session!.user = username;
    res.status(200).send('OK!');
  } catch(err) {
      throw500Error(req, res, next);
  }
  
});

AuthRouter.post('/login', async (req, res, next) => {
    const zodResult = signupSchema.safeParse(req.body);
    if (!zodResult.success) {
      throw400Error('Invalid input!', req, res, next);
      return;
    }

    try {
      const { username, password } = zodResult.data;
      const user = await User.findOne({ username });
      if (user) {
          const passwordCheck = await bcrypt.compare(password, user.password);
          if (passwordCheck) {
              req.session!.user = username;
              res.status(200).send('Login successful!');
          } else {
            throw400Error('Wrong password!', req, res, next);
          }
      } else {
          throw400Error('User does not exist!', req, res, next);
      }
    } catch(err) {
        throw500Error(req, res, next);     
    }
  });

AuthRouter.post('/logout', requireAuth, async (req, res, next) => {
  try {
    req.session = null;
    res.status(200).send('Logout successful!');
  } catch (err) {
      throw500Error(req, res, next);
  }
});

AuthRouter.get('', async (req, res, next) => {
  if (req.session && req.session.user && req.session.user.trim() !== '') {
    res.status(200).send(req.session.user);
} else {
    res.status(200).send('');
}
});

export default AuthRouter;