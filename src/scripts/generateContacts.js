import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();

    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    const updatedContacts = [...existingContacts, ...newContacts];

    await writeContacts(updatedContacts);
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

generateContacts(5);
