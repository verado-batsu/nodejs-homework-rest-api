const {
	ctrlWrapper
} = require('../../decorators');

const getAllContacts = require("./getAllContacts");
const getOneContactById = require("./getOneContactById");
const addNewContact = require("./addNewContact");
const deleteContactById = require("./deleteContactById");
const updateContactbyId = require("./updateContactbyId");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
	getAllContacts: ctrlWrapper(getAllContacts),
	getOneContactById: ctrlWrapper(getOneContactById),
	addNewContact: ctrlWrapper(addNewContact),
	deleteContactById: ctrlWrapper(deleteContactById),
	updateContactbyId: ctrlWrapper(updateContactbyId),
	updateStatusContact: ctrlWrapper(updateStatusContact)
}