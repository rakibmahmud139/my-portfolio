import catchAsync from '../../utils/catchAsync';
import { SkillServices } from './skillServices';

const createSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.createSkill(req.body);

  return res.status(201).json({
    success: true,
    statusCode: 201,
    message: 'Skill created successfully',
    data: result,
  });
});

const getAllSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.getAllSkill();

  return res.status(201).json({
    success: true,
    statusCode: 201,
    message: 'Skill retrieved successfully',
    data: result,
  });
});

export const SkillControllers = {
  createSkill,
  getAllSkill,
};
