import express from 'express';

import notesRtr from './notes';

const router = express.Router();

router.use('/notes', notesRtr);

export default router;
