import express from 'express';
import { SkillControllers } from './skillController';

const router = express.Router();

router.get('/', SkillControllers.getAllSkill);

router.post('/', SkillControllers.createSkill);

export const SkillRoutes = router;
