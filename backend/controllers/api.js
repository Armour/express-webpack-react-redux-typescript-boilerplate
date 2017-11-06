import db from '../db';

const apiRequest = async (req, res, requestType) => {
  try {
    const { rows } = await db.query('SELECT * FROM tableName', []);
    res.json({
      data: rows,
      requestType,
    });
  } catch (e) {
    res.json({
      data: 'data not found, check your database',
      requestType,
    });
  }
};

export const apiGet = (req, res) => apiRequest(req, res, 'GET');

export const apiPost = (req, res) => apiRequest(req, res, 'POST');

