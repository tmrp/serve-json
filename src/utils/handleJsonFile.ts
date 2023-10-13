import { readFileSync } from 'fs';

export const handleJsonFile = (fileName: string) => {
  const file = JSON.parse(
    readFileSync(`./src/data/api/${fileName}.json`, 'utf-8')
  );

  return file;
};
