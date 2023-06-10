const { Contact } = require("../../models");

const addNewContact = async (req, res) => {
	const addedContact = await Contact.create(req.body);
	res.status(201).json(addedContact);
}

module.exports = addNewContact;