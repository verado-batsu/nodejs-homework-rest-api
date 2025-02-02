const { Schema, model } = require('mongoose');

const { handleMongooseError } = require("../helpers")

const {emailRegexp, subscriptionList} = require('../constants/user')

const userSchema = new Schema({
	password: {
		type: String,
		required: [true, 'Set password for user'],
	},
	email: {
		type: String,
		required: [true, 'Email is required'],
		match: emailRegexp,
		unique: true,
	},
	subscription: {
		type: String,
		enum: subscriptionList,
		default: "starter"
	},
	avatarURL: String,
	token: String,
	verify: {
		type: Boolean,
		default: false,
	},
	verificationToken: {
		type: String,
		required: [true, 'Verify token is required'],
	}
}, { versionKey: false })

userSchema.post("save", handleMongooseError)

const User = model("user", userSchema)

module.exports = User;