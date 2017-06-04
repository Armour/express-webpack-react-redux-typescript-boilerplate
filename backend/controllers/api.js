import { db } from '../lib/db';

export const apiRequest = async (req, res, requestType) => {
  try {
    const data = await db.one('SELECT * FROM app_name_modelname', []);
    res.json({
      data: data.rows[0].field_name,
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

