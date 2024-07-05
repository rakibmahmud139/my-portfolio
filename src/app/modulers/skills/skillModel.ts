import { Schema, model } from 'mongoose';
import { TSkill } from './skillInterface';

const SkillSchema = new Schema<TSkill>({
  skillName: {
    type: String,
    required: [true, 'skill name is required'],
  },
  proficiencyLevel: {
    type: String,
    required: [true, 'level name is required'],
  },
  bgColor: { type: String },
  yearsOfExperience: {
    type: Number,
    required: [true, 'experience is required'],
  },
  image: {
    type: String,
    required: [true, 'image is required'],
  },
});

export const Skill = model<TSkill>('Skill', SkillSchema);
