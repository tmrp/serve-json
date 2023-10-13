import express from 'express';

import data from '../data/output.json';

const router = express.Router();

router.get('/*', (req, res) => {
  res.status(200).json(data);
});

export default router;
