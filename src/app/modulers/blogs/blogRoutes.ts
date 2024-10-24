import express from 'express';
import { BlogControllers } from './blogController';
import { auth } from '../../middleware/auth';

const router = express.Router();

router.get('/', BlogControllers.getAllFromDB);

router.get('/:id', BlogControllers.getSingleBlog);

router.post('/', auth(), BlogControllers.createIntoDB);

export const BlogRoutes = router;
