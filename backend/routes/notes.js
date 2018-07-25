import express from 'express';

import {
  getAllNotes, getNote, addNote, editNote, removeNote,
} from '../controllers/notes';

const router = express.Router();

router.get('/', getAllNotes);
router.get('/:id', getNote);
router.post('/', addNote);
router.put('/:id', editNote);
router.delete('/:id', removeNote);

export default router;
