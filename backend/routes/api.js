import express from 'express';

import { apiGetData } from '../controllers/api';

const router = express.Router();

/* API */
router.get('/getData', apiGetData);

export default router;
