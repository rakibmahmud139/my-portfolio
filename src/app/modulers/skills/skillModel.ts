import { Schema, model } from 'mongoose';
import { ProficiencyLevel, TSkill } from './skillInterface';

const SkillSchema = new Schema<TSkill>({
  skillName: {
    type: String,
    required: [true, 'skill name is required'],
  },
  proficiencyLevel: {
    type: String,
    enum: ProficiencyLevel,
    required: [true, 'skill name is required'],
  },
  category: {
    type: String,
    required: [true, 'category date is required'],
  },
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
