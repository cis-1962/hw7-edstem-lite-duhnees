import mongoose from 'mongoose';
import { IQuestion, QuestionSchema } from './question';
import { IUser, UserSchema } from './user';

export const User = mongoose.model<IUser>('User', UserSchema);
export const Question = mongoose.model<IQuestion>('Question', QuestionSchema);