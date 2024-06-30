export enum ProficiencyLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
}

export type TSkill = {
  skillName: string;
  proficiencyLevel: ProficiencyLevel;
  yearsOfExperience: number;
  category: string;
  image: string;
};
