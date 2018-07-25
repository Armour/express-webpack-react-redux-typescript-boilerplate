import status from 'http-status';

import db from '../db';

export const getAllNotes = async (req, res) => {
  try {
    const { rows: notes } = await db.query('SELECT * FROM notes ORDER BY id', []);
    return res.status(status.OK).json({
      data: {
        notes,
      },
      error: null,
    });
  } catch (e) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      data: null,
      error: {
        message: e.message,
        // You can also add below fields for better error displaying
        //   code - error code for your project
        //   developerMessage - debug message for developers
      },
    });
  }
};

export const getNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows: notes } = await db.query('SELECT * FROM notes WHERE id = $1', [id]);
    if (notes === undefined || notes.length === 0) {
      return res.status(status.NOT_FOUND).json({
        data: null,
        error: {
          message: `Note with id ${id} not found.`,
        },
      });
    }
    return res.status(status.OK).json({
      data: {
        note: notes[0],
      },
      error: null,
    });
  } catch (e) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      data: null,
      error: {
        message: e.message,
      },
    });
  }
};

export const addNote = async (req, res) => {
  try {
    const { content } = req.body;
    const { rows: notes } = await db.query('INSERT INTO notes(content) VALUES($1) RETURNING *', [content]);
    if (notes === undefined || notes.length === 0) {
      return res.status(status.NOT_FOUND).json({
        data: null,
        error: {
          message: 'Insert note failed.',
        },
      });
    }
    return res.status(status.OK).json({
      data: {
        note: notes[0],
      },
      error: null,
    });
  } catch (e) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      data: null,
      error: {
        message: e.message,
      },
    });
  }
};

export const editNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const { rows: notes } = await db.query('UPDATE notes SET content = $1 WHERE id = $2 RETURNING *', [content, id]);
    if (notes === undefined || notes.length === 0) {
      return res.status(status.NOT_FOUND).json({
        data: null,
        error: {
          message: `Update note with id ${id} failed.`,
        },
      });
    }
    return res.status(status.OK).json({
      data: {
        note: notes[0],
      },
      error: null,
    });
  } catch (e) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      data: null,
      error: {
        message: e.message,
      },
    });
  }
};

export const removeNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows: notes } = await db.query('DELETE FROM notes WHERE id = $1 RETURNING *', [id]);
    if (notes === undefined || notes.length === 0) {
      return res.status(status.NOT_FOUND).json({
        data: null,
        error: {
          message: `Delete note with id ${id} failed.`,
        },
      });
    }
    return res.status(status.OK).json({
      data: {
        note: notes[0],
      },
      error: null,
    });
  } catch (e) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      data: null,
      error: {
        message: e.message,
      },
    });
  }
};
