import config from '../../config';
import { createToken } from '../../utils/createToken';
import { TLogin, TRegister } from './authInterface';
import { User } from './authModel';
import bcrypt from 'bcryptjs';

const registerUser = async (payload: TRegister) => {
  const result = await User.create(payload);
  return result;
};

const loginUser = async (payload: TLogin) => {
  const { email } = payload;

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('User not found');
  }
  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    user.password,
  );

  if (!isPasswordMatched) {
    throw new Error('Your password is wrong !!');
  }
  const jwtPayload = {
    _id: user._id,
    username: user.username,
    email: user.email,
  };

  const token = createToken(
    jwtPayload,
    config.access_token_secret as string,
    config.access_token_expires_in as string,
  );

  const { username } = user;
  const userData = { username, email };

  return {
    user: userData,
    token,
  };
};

export const AuthServices = {
  registerUser,
  loginUser,
};
