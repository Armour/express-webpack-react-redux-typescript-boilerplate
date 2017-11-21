import db from '../db';

export const apiGetData = async (req, res) => {
  try {
    const { rows: data } = await db.query('SELECT * FROM tableName', []);
    if (data === undefined || data.length === 0) throw Error();
    res.json({
      data,
    });
  } catch (e) {
    res.json({
      data: 'data not found, check your database',
    });
  }
};
