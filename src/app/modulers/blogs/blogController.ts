import catchAsync from '../../utils/catchAsync';
import { BlogServices } from './blogServices';

const createIntoDB = catchAsync(async (req, res) => {
  const result = await BlogServices.createIntoDB(req.body);

  return res.status(201).json({
    success: true,
    statusCode: 201,
    message: 'Blog created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllFromDB();

  return res.status(201).json({
    success: true,
    statusCode: 201,
    message: 'Blog retrieved successfully',
    data: result,
  });
});

export const BlogControllers = {
  createIntoDB,
  getAllFromDB,
};
