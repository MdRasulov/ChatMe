import express from 'express';
import {getContactsController, addContactController, deleteContactController } from '../controllers/contact.js';

const router = express.Router();

router.get('/', getContactsController);
router.post('/', addContactController);
router.delete('/', deleteContactController);

export default router;
