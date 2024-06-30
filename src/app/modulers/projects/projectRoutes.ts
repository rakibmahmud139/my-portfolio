import express from 'express';
import { ProjectControllers } from './projectController';

const router = express.Router();

router.get('/', ProjectControllers.getAllProject);

router.post('/', ProjectControllers.createProject);

export const ProjectRoutes = router;
