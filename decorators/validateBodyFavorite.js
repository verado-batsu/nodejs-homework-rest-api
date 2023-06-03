const { HttpError } = require("../helpers");

const validateBodyFavorite = schema => {
	const func = (req, res, next) => {
		if (!req.body || Object.keys(req.body).length === 0) {
			next(HttpError(400, "missing field favorite"));
		}
		const { error } = schema.validate(req.body);
		if (error) {
			next(HttpError(400, error.message));
		}
		next(error);
	}
	return func;
}

module.exports = validateBodyFavorite;