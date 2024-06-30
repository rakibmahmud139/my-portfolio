import express from 'express';
import { BlogControllers } from './blogController';

const router = express.Router();

router.get('/', BlogControllers.getAllFromDB);

router.post('/', BlogControllers.createIntoDB);

export const BlogRoutes = router;
