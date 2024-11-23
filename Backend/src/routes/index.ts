// index.ts

import { Router } from 'express';
import userRoutes from './userRoutes'; // Import the user routes

const router = Router();

// Mount the userRoutes under /users path
router.use('/users', userRoutes);

export default router;
