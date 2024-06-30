import { TSkill } from './skillInterface';
import { Skill } from './skillModel';

const createSkill = async (payload: TSkill) => {
  const result = await Skill.create(payload);
  return result;
};

const getAllSkill = async () => {
  const result = await Skill.find();
  return result;
};

export const SkillServices = {
  createSkill,
  getAllSkill,
};
