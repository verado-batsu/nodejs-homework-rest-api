const handleMongooseError = (error, data, next) => {
	error.status = (error.code === 11000 && error.name === "MongoServerError") ? 409 : 400;
	next();
}

module.exports = handleMongooseError;