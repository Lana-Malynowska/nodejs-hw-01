import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const jsonData = JSON.stringify(updatedContacts);
    await fs.writeFile(PATH_DB, jsonData, 'utf-8');
    console.log('File is successfully updated');
  } catch (error) {
    console.error('error occurs:', error);
    throw error;
  }
};
