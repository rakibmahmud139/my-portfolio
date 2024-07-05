import express from 'express';
import { AuthControllers } from './authController';

const router = express.Router();

router.post('/register', AuthControllers.registerUser);

router.post('/login', AuthControllers.loginUser);

export const AuthRoutes = router;
