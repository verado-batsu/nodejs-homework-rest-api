const Joi = require('joi');

const { emailRegexp, subscriptionList } = require('../constants/user')

const userRegisterSchema = Joi.object({
	password: Joi.string().required().messages({
		'any.required': `missing required password field`
    }),
	email: Joi.string().pattern(emailRegexp).required().messages({
		'any.required': `missing required email field`
    }),
})

const userSubscriptionSchema = Joi.object({
	subscription: Joi.string().valid(...subscriptionList).required().messages({
		'any.required': `missing required subscription field`
    })
})

const userEmailSchema = Joi.object({
	email: Joi.string().pattern(emailRegexp).required().messages({
		'any.required': `missing required field email`
    }),
})

module.exports = {
	userRegisterSchema,
	userSubscriptionSchema,
	userEmailSchema
}