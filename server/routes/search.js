import express from 'express';
import { findUserController } from '../controllers/search.js';

const router = express.Router();

router.get('/', findUserController);

export default router;
