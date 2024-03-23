import express from 'express';
import z from 'zod';
import { createUser } from '../lib/account';
import { User } from '../models';
import bcrypt from 'bcrypt';


const AuthRouter = express.Router();

const signupSchema = z.object({
  username: z.string(),
  password: z.string(),
});

AuthRouter.post('/signup', async (req, res) => {
  const zodResult = signupSchema.safeParse(req.body);
  if (!zodResult.success) {
    res.status(400).send('Invalid input!');
    return;
  }

  const { username, password } = zodResult.data;
  await createUser(username, password);

  req.session!.user = username;
  res.status(200).send('OK!');
});

AuthRouter.post('/login', async (req, res) => {
    const zodResult = signupSchema.safeParse(req.body);
    if (!zodResult.success) {
      res.status(400).send('Invalid input!');
      return;
    }
  
    const { username, password } = zodResult.data;
    const user = await User.findOne({ username });
    if (user) {
        const passwordCheck = await bcrypt.compare(password, user.password);
        if (passwordCheck) {
            req.session!.user = username;
            res.status(200).send('Login successful!');
        } else {
            res.status(400).send('Invalid Password!');
        }
    } else {
        res.status(400).send('User does not exist!');
    }
  });

  AuthRouter.post('/logout', async (req, res) => {
    req.session = null;
    res.status(200).send('Logout successful!');
  });

export default AuthRouter;