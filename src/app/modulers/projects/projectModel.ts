import { Schema, model } from 'mongoose';
import { TProject } from './projectInterface';

const ProjectSchema = new Schema<TProject>({
  projectTitle: {
    type: String,
    required: [true, 'title is required'],
  },
  description: {
    type: String,
    required: [true, 'description is required'],
  },
  liveLink: {
    type: String,
    required: [true, 'live link is required'],
  },
  backEndGitHubLink: {
    type: String,
    required: [true, 'Back end gitHub link is required'],
  },
  projectImage: {
    type: String,
    required: [true, 'project image is required'],
  },
  repositoryURL: {
    type: String,
    required: [true, 'repository URL is required'],
  },
  startDate: {
    type: String,
    required: [true, 'startDate is required'],
  },
  endDate: {
    type: String,
    required: [true, 'endDate is required'],
  },
  usedTechnologiesBackend: {
    type: [String],
    required: [true, 'used technologies backend is required'],
  },
  usedTechnologiesFrontend: {
    type: [String],
    required: [true, 'used technologies frontend is required'],
  },
});

export const Project = model<TProject>('Project', ProjectSchema);
