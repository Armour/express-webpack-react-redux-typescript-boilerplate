import express from 'express';

const router = express.Router();

/* API */
const api = router.get('/', (req, res) => {
  res.json({
    data: 'api data',
  });
});

export default api;
