const Contact = require("../../models/contact");
const { HttpError } = require("../../helpers");

const updateStatusContact = async (req, res) => {
	const { contactId } = req.params;
	const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, {new: true})
	if (!updatedContact) {
		throw HttpError(404);
	}
	res.json(updatedContact)
}

module.exports = updateStatusContact;