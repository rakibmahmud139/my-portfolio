import { Schema, model } from 'mongoose';
import { TRegister } from './authInterface';
import config from '../../config';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema<TRegister>({
  username: {
    type: String,
    required: [true, 'user name is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
  },
  password: {
    type: String,
    required: [true, 'password date is required'],
  },
  role: {
    type: String,
    enum: ['admin'],
    default: 'admin',
  },
});

UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

export const User = model<TRegister>('User', UserSchema);
