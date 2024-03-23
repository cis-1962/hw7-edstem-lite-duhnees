import bcrypt from 'bcrypt';
import { User } from '../models';

export async function createUser(username: string, password: string) {
  const userExists = await User.exists({ username });
  if (userExists) {
    throw new Error('User already exists!');
  }

  const salt = await bcrypt.genSalt();
  const newUser = new User({
    username,
    password: await bcrypt.hash(password, salt),
    salt,
  });

  await newUser.save();
}