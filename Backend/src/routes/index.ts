import { Router } from 'express';
import userRoutes from './userRoutes';

const router = Router();

router.use('/users', userRoutes); // Map the '/users' route to userRoutes

export default router;
