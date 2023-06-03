const Contact = require("../models/contact");

const { HttpError } = require("../helpers");

const {
	ctrlWrapper
} = require('../decorators');

const getAllContacts = async (req, res) => {
	const contacts = await Contact.find();
	res.json(contacts);
}

const getOneContactById = async (req, res) => {
	const { contactId } = req.params;
	const contact = await Contact.findById(contactId);
	if (!contact) {
		throw HttpError(404);
	}
	res.json(contact)
}

const addNewContact = async (req, res) => {
	const addedContact = await Contact.create(req.body);
	res.status(201).json(addedContact);
}

const deleteContactById = async (req, res) => {
	const { contactId } = req.params;
	const deletedContact = await Contact.findByIdAndDelete(contactId)
	if (!deletedContact) {
		throw HttpError(404);
	}
	res.json({ message: 'contact deleted' });
}

const updateContactbyId = async (req, res) => {
	const { contactId } = req.params;
	const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, {new: true})
	if (!updatedContact) {
		throw HttpError(404);
	}
	res.json(updatedContact)
}

const updateStatusContact = async (req, res) => {
	const { contactId } = req.params;
	const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, {new: true})
	if (!updatedContact) {
		throw HttpError(404);
	}
	res.json(updatedContact)
}

module.exports = {
	getAllContacts: ctrlWrapper(getAllContacts),
	getOneContactById: ctrlWrapper(getOneContactById),
	addNewContact: ctrlWrapper(addNewContact),
	deleteContactById: ctrlWrapper(deleteContactById),
	updateContactbyId: ctrlWrapper(updateContactbyId),
	updateStatusContact: ctrlWrapper(updateStatusContact)
}