// userRoutes.ts

import { Router } from 'express';
import UserController from '@/controller/UserController';

const router = Router();

// Create an instance of the UserController
const userController = new UserController();

// Define the GET route to fetch users
router.post('/', userController.createUser);
router.get('/', userController.getUsers);

export default router;
