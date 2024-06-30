import { Schema, model } from 'mongoose';
import { TExperience } from './experienceInterface';

const ExperienceSchema = new Schema<TExperience>({
  companyName: {
    type: String,
    required: [true, 'company name is required'],
  },
  jobTitle: {
    type: String,
    required: [true, 'job title is required'],
  },
  location: {
    type: String,
    required: [true, 'location link is required'],
  },
  startDate: {
    type: String,
    required: [true, 'startDate is required'],
  },
  endDate: {
    type: String,
    required: [true, 'endDate is required'],
  },
});

export const Experience = model<TExperience>('Experience', ExperienceSchema);
