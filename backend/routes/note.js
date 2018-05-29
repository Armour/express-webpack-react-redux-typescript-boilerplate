import express from 'express';

import { getNotes } from '../controllers/note';

const router = express.Router();

router.get('/getNotes', getNotes);

export default router;
