const Contact = require("../models/contact");

const { HttpError } = require("../helpers");

const {
	ctrlWrapper
} = require('../decorators');

// const {
// 	removeContact,
// 	updateContact,
// 	addContact,
// 	getContactById,
// 	listContacts
// } = require("../models/contact");


const getAllContacts = async (req, res) => {
	const contacts = await Contact.find();
	res.json(contacts);
}

// const getOneContactById = async (req, res) => {
// 	const { contactId } = req.params;
// 	const contact = await getContactById(contactId);
// 	if (!contact) {
// 		throw HttpError(404);
// 	}
// 	res.json(contact)
// }

const addNewContact = async (req, res) => {
	const addedContact = await Contact.create(req.body);
	res.status(201).json(addedContact);
}

// const deleteContactById = async (req, res) => {
// 	const { contactId } = req.params;
// 	const deletedContact = await removeContact(contactId)
// 	if (!deletedContact) {
// 		throw HttpError(404);
// 	}
// 	res.json({ message: 'contact deleted' });
// }

// const updateContactbyId = async (req, res) => {
// 	const { contactId } = req.params;
// 	const updatedContact = await updateContact(contactId, req.body)
// 	if (!updatedContact) {
// 		throw HttpError(404);
// 	}
// 	res.json(updatedContact)
// }

module.exports = {
	getAllContacts: ctrlWrapper(getAllContacts),
	// getOneContactById: ctrlWrapper(getOneContactById),
	addNewContact: ctrlWrapper(addNewContact),
	// deleteContactById: ctrlWrapper(deleteContactById),
	// updateContactbyId: ctrlWrapper(updateContactbyId)
}