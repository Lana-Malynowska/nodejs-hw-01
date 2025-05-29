import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    if (!Array.isArray(existingContacts)) {
      throw new TypeError('existingContacts is not an array');
    }

    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    const updatedContacts = [...existingContacts, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(
      `added ${number} new contacts. Now there are ${updatedContacts.length} contacts`,
    );
  } catch (error) {
    console.error('Error occurs:', error);
  }
};

// generateContacts(5);
generateContacts(3);
