import express from 'express';

import { apiGet, apiPost } from '../controllers/api';

const router = express.Router();

/* API */
router.get('/', apiGet);
router.post('/', apiPost);

export default router;
