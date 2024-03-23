import express from 'express';
import dotenv from 'dotenv';
import cookieSession from 'cookie-session';
import mongoose from 'mongoose';
import AuthRouter from './routes/account';

// read environment variables from .env file. do this for the secret string
dotenv.config();
const PORT = process.env.PORT ?? 8000;
const SECRET=process.env.SECRET ?? "secret";

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/express';

mongoose.connect(MONGODB_URI, {});

const app = express();
app.use(express.json());

app.use(
  cookieSession({
    name: 'session',
    secret: SECRET,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  }),
);

//from class demo
app.use((req, res, next) => {
  console.log(req.session);
  next();
});


app.use('/api/account', AuthRouter);



// listen
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Now listening on port ${PORT}.`);
});
