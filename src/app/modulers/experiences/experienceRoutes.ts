import express from 'express';
import { ExperienceControllers } from './experienceController';

const router = express.Router();

router.get('/', ExperienceControllers.getAllFromDB);

router.post('/', ExperienceControllers.createIntoDB);

export const ExperienceRoutes = router;
