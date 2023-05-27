const fs = require('fs/promises');
const { nanoid } = require('nanoid');
const path = require('path');

const contactsPath = path.join(__dirname, 'contacts.json')

const listContacts = async () => {
	const buffer = await fs.readFile(contactsPath);
	return JSON.parse(buffer);
}

const getContactById = async (contactId) => {
	const contacts = await listContacts();
	const contact = contacts.find(({ id }) => {
		return id === contactId
	})
	return contact || null;
}

const removeContact = async (contactId) => {
	const contacts = await listContacts();
	const contactIndex = contacts.findIndex(contact => contact.id === contactId);

	if (contactIndex === -1) {
		return null;
	}

	const [result] = contacts.splice(contactIndex, 1);

	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 4))

	return result;
}

const addContact = async (body) => {
	const contacts = await listContacts();
	const newContact = {
		id: nanoid(),
		...body
	}
	contacts.push(newContact)
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 4));
	return newContact;
}

const updateContact = async (contactId, body) => {
	const contacts = await listContacts();

	const contactIndex = contacts.findIndex(contact => contact.id === contactId);

	if (contactIndex === -1) {
		return null;
	}

	contacts[contactIndex] = { id: contactId, ...body };

	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 4));

	return contacts[contactIndex];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
