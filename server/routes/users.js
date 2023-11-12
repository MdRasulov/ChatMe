import express from 'express';
import { getUserController } from '../controllers/users.js';

const router = express.Router();

router.get('/:userId', getUserController);

export default router;
