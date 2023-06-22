const bcrypt = require('bcrypt');
const { User } = require("../../models");
const gravatar = require('gravatar');
const nanoid = require('nanoid');

const { HttpError, sendEmail } = require("../../helpers");

const register = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email })
	if (user) {
		throw HttpError(409, "Email in use");
	}

	const avatarURL = gravatar.url(email);
	const hashPassword = await bcrypt.hash(password, 10);

	const verificationToken = nanoid();

	const newUser = await User.create({ ...req.body, password: hashPassword, avatarURL, verificationToken });

	const verifyEmail = {
		to: email,
		subject: 'Verify email',
		html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Click to Verify Email</a>`
	}
	
	sendEmail(verifyEmail)

	res.status(201).json({
		user: {
			email: newUser.email,
			subscription: newUser.subscription,
		}
	})
}

module.exports = register;