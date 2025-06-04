import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    if (!data) return [];

    const parsedData = JSON.parse(data);
    if (!Array.isArray(parsedData)) return [];

    return parsedData;
  } catch (error) {
    console.error('An error occurred:', error);
    return [];
  }
};
