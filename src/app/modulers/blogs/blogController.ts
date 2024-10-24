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

const getSingleBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.getSingleBlog(id);

  return res.status(201).json({
    success: true,
    statusCode: 201,
    message: 'Single blog retrieved successfully',
    data: result,
  });
});

export const BlogControllers = {
  createIntoDB,
  getAllFromDB,
  getSingleBlog,
};
