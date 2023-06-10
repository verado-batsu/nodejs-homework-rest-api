const express = require('express');

const { validateBody } = require('../../decorators');
const { userRegisterSchema } = require('../../schemas/users');

const {
	register,
	login
} = require('../../controllers/users')

const router = express.Router()

router.post('/register', validateBody(userRegisterSchema), register)

router.post('/login', validateBody(userRegisterSchema), login)

router.post('/logout', validateBody(userRegisterSchema), login)

module.exports = router;