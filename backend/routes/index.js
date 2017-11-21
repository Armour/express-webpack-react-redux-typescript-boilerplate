import express from 'express';

import apiRtr from './api';

const router = express.Router();

router.use('/api', apiRtr);

export default router;
