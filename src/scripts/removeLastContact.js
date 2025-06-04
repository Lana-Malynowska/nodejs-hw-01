import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const existingContacts = await readContacts();

    if (existingContacts.length > 0) {
      existingContacts.pop();
      return await writeContacts(existingContacts);
    }

    return null;
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

removeLastContact();
