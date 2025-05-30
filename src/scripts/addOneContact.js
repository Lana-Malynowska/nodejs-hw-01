import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    if (!Array.isArray(existingContacts)) {
      throw new TypeError('existingContacts is not an array');
    }

    const newContact = createFakeContact();
    const updatedContacts = [...existingContacts, newContact];

    await writeContacts(updatedContacts);

    console.log(
      `new contact added: ${newContact.name}. Now there are ${updatedContacts.length} contacts`,
    );
  } catch (error) {
    console.error('Error occurs:', error);
  }
};

addOneContact();
