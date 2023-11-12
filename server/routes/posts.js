import express from 'express';
import {
  getPostsController,
  addPostController,
  deletePostController,
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPostsController);
router.post('/', addPostController);
router.delete('/', deletePostController);

export default router;
