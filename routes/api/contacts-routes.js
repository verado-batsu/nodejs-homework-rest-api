const express = require('express');
const {
	getAllContacts,
	getOneContactById,
	addNewContact,
	deleteContactById,
	updateContactbyId
} = require('../../controllers/contacts-controller');

const {contactAddSchema} = require('../../schemas/contacts');

const { validateBody } = require('../../decorators');

const router = express.Router()

router.get('/', getAllContacts)

router.get('/:contactId', getOneContactById)

router.post('/', validateBody(contactAddSchema), addNewContact)

router.delete('/:contactId', deleteContactById)

router.put('/:contactId', validateBody(contactAddSchema), updateContactbyId)

module.exports = router;
