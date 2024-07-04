export enum ProficiencyLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
}

export type TSkill = {
  skillName: string;
  proficiencyLevel: ProficiencyLevel;
  bgColor?: string;
  yearsOfExperience: number;
  image: string;
};
