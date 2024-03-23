import mongoose from 'mongoose';
import { IUser, UserSchema } from './user';
import { IQuestion, QuestionSchema } from './question';

export const User = mongoose.model<IUser>('User', UserSchema);
export const Question = mongoose.model<IQuestion>('Question', QuestionSchema);