const {
	ctrlWrapper
} = require('../../decorators');

const register = require("./register")
const login = require("./login")
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const updateSubscription = require('./updateSubscription');
const updateAvatar = require('./updateAvatar');
const verify = require('./verify');
const resendVerify = require('./resendVerify');

module.exports = {
	register: ctrlWrapper(register),
	login: ctrlWrapper(login),
	logout: ctrlWrapper(logout),
	getCurrent: ctrlWrapper(getCurrent),
	updateSubscription: ctrlWrapper(updateSubscription),
	updateAvatar: ctrlWrapper(updateAvatar),
	verify: ctrlWrapper(verify),
	resendVerify: ctrlWrapper(resendVerify)
}