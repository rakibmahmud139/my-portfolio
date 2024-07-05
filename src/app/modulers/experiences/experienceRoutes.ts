import express from 'express';
import { ExperienceControllers } from './experienceController';
import { auth } from '../../middleware/auth';

const router = express.Router();

router.get('/', ExperienceControllers.getAllFromDB);

router.post('/', auth(), ExperienceControllers.createIntoDB);

export const ExperienceRoutes = router;
