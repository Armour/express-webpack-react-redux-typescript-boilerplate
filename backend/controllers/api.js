import { db } from '../lib/db';

export const apiRequest = async (req, res, requestType) => {
  try {
    const data = await db.many('SELECT * FROM tableName', []);
    res.json({
      data,
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

