import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const existingContacts = await readContacts();

    if (!Array.isArray(existingContacts)) {
      throw new TypeError('existingContacts is not an array');
    }

    if (existingContacts.length > 0) {
      existingContacts.pop();
      await writeContacts(existingContacts);
    }

    console.log(`Now there are ${existingContacts.length} contacts`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

removeLastContact();
