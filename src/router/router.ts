import { Router } from 'express';
import { readdirSync } from 'fs';

import data from '../data/example.json';
import { handleJsonFile } from '../utils/handleJsonFile';

const router = Router();

const files = readdirSync('./src/data/api/');

files.forEach((file) => {
  const fileName = file.split('.')[0];
  router.get(`/api/${fileName}`, (req, res) => {
    res.status(200).json(handleJsonFile(fileName));
  });
});

router.get('/*', (req, res) => {
  res.status(200).json(data);
});

export default router;
