const express = require('express');
const {
	getAllContacts,
	getOneContactById,
	addNewContact,
	deleteContactById,
	updateContactbyId,
	updateStatusContact
} = require('../../controllers/dfsddfsds');

const {contactAddSchema, contactUpdateFavoriteSchema} = require('../../schemas/contacts');

const { validateBody, validateBodyFavorite } = require('../../decorators');
const {isValidId} = require("../../middlewares")



const router = express.Router()

router.get('/', getAllContacts)

router.get('/:contactId', isValidId, getOneContactById)

router.post('/', validateBody(contactAddSchema), addNewContact)

router.delete('/:contactId', isValidId, deleteContactById)

router.put('/:contactId', isValidId, validateBody(contactAddSchema), updateContactbyId)

router.patch('/:contactId/favorite', isValidId, validateBodyFavorite(contactUpdateFavoriteSchema), updateStatusContact)

module.exports = router;
