import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const existingContacts = await readContacts();

    if (!Array.isArray(existingContacts)) {
      throw new TypeError('existingContacts is not an array');
    }

    return `There are ${existingContacts.length} contacts in your Contact List`;
  } catch (error) {
    console.error('An error occurred:', error);
    return 'An error occurred while counting contacts';
  }
};

console.log(await countContacts());
