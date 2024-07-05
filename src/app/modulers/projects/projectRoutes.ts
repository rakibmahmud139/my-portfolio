import express from 'express';
import { ProjectControllers } from './projectController';
import { auth } from '../../middleware/auth';

const router = express.Router();

router.get('/', ProjectControllers.getAllProject);

router.get('/:id', ProjectControllers.getSingleProject);

router.post('/', auth(), ProjectControllers.createProject);

export const ProjectRoutes = router;
