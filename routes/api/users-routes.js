const express = require('express');

const { validateBody } = require('../../decorators');
const { userRegisterSchema, userSubscriptionSchema } = require('../../schemas/users');

const {
	register,
	login,
	logout,
	getCurrent,
	updateSubscription,
	updateAvatar
} = require('../../controllers/users')

const { authenticate, upload } = require("../../middlewares");

const router = express.Router()

router.post('/register', validateBody(userRegisterSchema), register)

router.post('/login', validateBody(userRegisterSchema), login)

router.post('/logout', authenticate, logout)

router.get('/current', authenticate, getCurrent)

router.patch('/subscription', authenticate, validateBody(userSubscriptionSchema), updateSubscription)

router.patch('/avatars', authenticate, upload.single('avatar'), updateAvatar)

module.exports = router;