import db from '../db';

export const getNotes = async (req, res) => {
  try {
    const { rows: notes } = await db.query('SELECT * FROM notes', []);
    if (notes === undefined || notes.length === 0) throw Error();
    res.json({
      notes,
      code: 200,
    });
  } catch (e) {
    res.json({
      notes: 'notes not found, check your database',
      code: 404,
    });
  }
};
