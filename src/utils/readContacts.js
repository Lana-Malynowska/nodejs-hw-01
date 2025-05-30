import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    console.log(data);
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    if (error.code === 'ENOENT') {
      return [];
    } else {
      throw error;
    }
  }
};
