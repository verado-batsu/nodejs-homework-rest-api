const Joi = require('joi');


const contactAddSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	phone: Joi.required()
})

module.exports = {
	contactAddSchema,
}