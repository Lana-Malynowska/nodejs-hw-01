import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const allContacts = await readContacts();
    return allContacts.length;
  } catch (error) {
    console.error('An error occurred:', error);
    return 0;
  }
};

console.log(await countContacts());
