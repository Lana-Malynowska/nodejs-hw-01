import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const existingContacts = await readContacts();

    if (!Array.isArray(existingContacts)) {
      throw new TypeError('existingContacts is not an array');
    }

    return existingContacts;
  } catch (error) {
    console.error('An error occurred:', error);
    return [];
  }
};

console.log(await getAllContacts());
