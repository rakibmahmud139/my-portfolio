import catchAsync from '../../utils/catchAsync';
import { ProjectServices } from './projectServices';

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.createProject(req.body);

  return res.status(201).json({
    success: true,
    statusCode: 201,
    message: 'Project created successfully',
    data: result,
  });
});

const getAllProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProject();

  return res.status(201).json({
    success: true,
    statusCode: 201,
    message: 'Project retrieved successfully',
    data: result,
  });
});

const getSingleProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectServices.getSingleProject(id);

  return res.status(201).json({
    success: true,
    statusCode: 201,
    message: 'Single project retrieved successfully',
    data: result,
  });
});

export const ProjectControllers = {
  createProject,
  getAllProject,
  getSingleProject,
};
