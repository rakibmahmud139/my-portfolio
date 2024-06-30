import { TExperience } from './experienceInterface';
import { Experience } from './experienceModel';

const createIntoDB = async (payload: TExperience) => {
  const result = await Experience.create(payload);
  return result;
};

const getAllFromDB = async () => {
  const result = await Experience.find();
  return result;
};

export const ExperienceServices = {
  getAllFromDB,
  createIntoDB,
};
