import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { User } from '../modulers/auth/authModel';
import catchAsync from '../utils/catchAsync';

export const auth = () => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new Error('Unauthorized access');
    }

    const decoded = jwt.verify(
      token,
      config.access_token_secret as string,
    ) as JwtPayload;

    const { _id } = decoded;

    const user = await User.findById(_id);

    if (!user) {
      throw new Error('User not found');
    }

    req.user = decoded as JwtPayload;

    next();
  });
};
