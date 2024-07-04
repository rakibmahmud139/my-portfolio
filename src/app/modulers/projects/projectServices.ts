import { TProject } from './projectInterface';
import { Project } from './projectModel';

const createProject = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

const getAllProject = async () => {
  const result = await Project.find();
  return result;
};

const getSingleProject = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

export const ProjectServices = {
  createProject,
  getAllProject,
  getSingleProject,
};
