import express from 'express';
import { SkillControllers } from './skillController';
import { auth } from '../../middleware/auth';

const router = express.Router();

router.get('/', SkillControllers.getAllSkill);

router.post('/', auth(), SkillControllers.createSkill);

export const SkillRoutes = router;
