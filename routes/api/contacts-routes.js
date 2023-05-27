const express = require('express')
const Joi = require('joi');

const {
	listContacts,
	getContactById,
	removeContact,
	addContact,
	updateContact
} = require('../../models/contacts')

const { HttpError } = require('../../helpers')

const router = express.Router()

const contactAddSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	phone: Joi.required()
})

router.get('/', async (req, res, next) => {
	try {
		const contacts = await listContacts()
		res.json(contacts);
	}
	catch (error) {
		next(error);
	}
})

router.get('/:contactId', async (req, res, next) => {
	try {
		const { contactId } = req.params;
		const contact = await getContactById(contactId);
		if (!contact) {
			throw HttpError(404);
		}
		res.json(contact)
	} catch (error) {
		next(error);
	}
	
})

router.post('/', async (req, res, next) => {
	try {
		const { error } = contactAddSchema.validate(req.body);
		if (error) {
			throw HttpError(400, error.message);
		}
		const addedContact = await addContact(req.body);
		res.status(201).json(addedContact);
	} catch (error) {
		next(error);
	}
})

router.delete('/:contactId', async (req, res, next) => {
	try {
		const { contactId } = req.params;
		const deletedContact = await removeContact(contactId)
		if (!deletedContact) {
			throw HttpError(404);
		}
		res.json({ message: 'contact deleted' });
	} catch (error) {
		next(error);
	}
})

router.put('/:contactId', async (req, res, next) => {
	try {
		const { error } = contactAddSchema.validate(req.body);
		if (error) {
			throw HttpError(400, error.message);
		}
		const { contactId } = req.params;
		const updatedContact = await updateContact(contactId, req.body)
		if (!updatedContact) {
			throw HttpError(404);
		}
		res.json(updatedContact)
	} catch (error) {
		next(error);
	}
})

module.exports = router;
