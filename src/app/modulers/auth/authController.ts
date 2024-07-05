import catchAsync from '../../utils/catchAsync';
import { AuthServices } from './authServices';

const registerUser = catchAsync(async (req, res) => {
  const result = await AuthServices.registerUser(req.body);

  return res.status(201).json({
    success: true,
    statusCode: 201,
    message: 'User registration successfully',
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);

  return res.status(201).json({
    success: true,
    statusCode: 201,
    message: 'User login successfully',
    data: result,
  });
});

export const AuthControllers = {
  registerUser,
  loginUser,
};
