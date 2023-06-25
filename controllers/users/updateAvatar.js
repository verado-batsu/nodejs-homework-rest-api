const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const avatarsDir = path.resolve("public", "avatars");

const updateAvatar = async (req, res) => {
	const { _id: id } = req.user;
	if (!req.file) {
		throw HttpError(400, 'Avatar is required field');
	}

	const { path: oldPath, filename } = req.file;

	const image = await Jimp.read(oldPath);
	await image.resize(250, 250).write(oldPath)

	const newPath = path.join(avatarsDir, filename);

	await fs.rename(oldPath, newPath)
	const avatarURL = path.join("avatars", filename);

	await User.findByIdAndUpdate(id, { avatarURL })

	res.json({
		avatarURL
	})
}

module.exports = updateAvatar;