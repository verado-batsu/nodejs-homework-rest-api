const Joi = require('joi');

const { emailRegexp } = require('../constants/user')

const userRegisterSchema = Joi.object({
	password: Joi.string().required().messages({
		'any.required': `missing required password field`
    }),
	email: Joi.string().pattern(emailRegexp).required().messages({
		'any.required': `missing required email field`
    }),
})

module.exports = {
	userRegisterSchema
}