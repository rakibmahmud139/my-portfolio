import catchAsync from '../../utils/catchAsync';
import { ExperienceServices } from './experienceServices';

const createIntoDB = catchAsync(async (req, res) => {
  const result = await ExperienceServices.createIntoDB(req.body);

  return res.status(201).json({
    success: true,
    statusCode: 201,
    message: 'Experience created successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const result = await ExperienceServices.getAllFromDB();

  return res.status(201).json({
    success: true,
    statusCode: 201,
    message: 'Experience retrieved successfully',
    data: result,
  });
});

export const ExperienceControllers = {
  createIntoDB,
  getAllFromDB,
};
