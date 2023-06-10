const { Contact } = require("../../models");

const addNewContact = async (req, res) => {
	const { _id: owner } = req.user;
	const addedContact = await Contact.create({...req.body, owner});
	res.status(201).json(addedContact);
}

module.exports = addNewContact;