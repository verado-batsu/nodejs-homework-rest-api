const { HttpError } = require("../helpers");

const validateBody = schema => {
	const func = (req, res, next) => {
    if (!req.body) {
			next(HttpError(400, "missing fields"));
		}
		const { error } = schema.validate(req.body);
		if (error) {
			next(HttpError(400, error.message));
		}
		next(error);
	}
	return func;
}

module.exports = validateBody;